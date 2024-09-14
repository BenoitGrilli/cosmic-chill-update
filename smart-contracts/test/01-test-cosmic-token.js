const { expect } = require("chai");
const { ethers } = require("hardhat");
const { parseUnits } = require("ethers");

describe("CosmicToken contract", function () {
  let cosmicToken;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addrs;
  let OWNER_ROLE;
  let MINTER_ROLE;
  let TREASURY_ROLE;
  let ADMIN_ROLE;

  beforeEach(async function () {
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    const CosmicToken = await ethers.getContractFactory("CosmicToken");
    cosmicToken = await CosmicToken.deploy(addr1.address, addr2.address);
   

    OWNER_ROLE = await cosmicToken.OWNER_ROLE();
    MINTER_ROLE = await cosmicToken.MINTER_ROLE();
    TREASURY_ROLE = await cosmicToken.TREASURY_ROLE();
    ADMIN_ROLE = await cosmicToken.ADMIN_ROLE();
  });

  describe("Deployment", function () {
    it("Is constructor role working (should be)", async function () {
      expect(await cosmicToken.isOwner(owner.address)).to.be.true;
      expect(await cosmicToken.hasRole(ADMIN_ROLE, addr2.address)).to.be.true;
      expect(await cosmicToken.hasRole(MINTER_ROLE, addr1.address)).to.be.true;
    });
  });

  describe("Roles", function () {
    it("Owner should be able to give every role", async function () {
      expect(await cosmicToken.isOwner(addr3)).to.be.false;
      expect(await cosmicToken.isAdmin(addr3)).to.be.false;
      expect(await cosmicToken.isMinter(addr3)).to.be.false;

      await cosmicToken.connect(owner).giveOwnerRole(addr3.address);
      await cosmicToken.connect(owner).giveAdminRole(addr3.address);
      await cosmicToken.connect(owner).giveMinterRole(addr3.address);

      expect(await cosmicToken.isOwner(addr3)).to.be.true;
      expect(await cosmicToken.isAdmin(addr3)).to.be.true;
      expect(await cosmicToken.isMinter(addr3)).to.be.true;
    });

    it("Owner should be able to revoke Admin and Minter", async function () {
      await cosmicToken.connect(owner).giveOwnerRole(addr3.address);
      await cosmicToken.connect(owner).giveAdminRole(addr3.address);
      await cosmicToken.connect(owner).giveMinterRole(addr3.address);

      expect(await cosmicToken.isOwner(addr3)).to.be.true;
      expect(await cosmicToken.isAdmin(addr3)).to.be.true;
      expect(await cosmicToken.isMinter(addr3)).to.be.true;

      await cosmicToken.connect(owner).revokeAdminRole(addr3.address);
      await cosmicToken.connect(owner).revokeMinterRole(addr3.address);
      expect(await cosmicToken.isAdmin(addr3)).to.be.false;
      expect(await cosmicToken.isMinter(addr3)).to.be.false;
      // Note: There's no revokeOwnerRole function in the contract
    });

    it("Admin should be able to give minter role", async function () {
      expect(await cosmicToken.isAdmin(addr2)).to.be.true;
      expect(await cosmicToken.isMinter(addr3)).to.be.false;

      await cosmicToken.connect(addr2).giveMinterRole(addr3.address);
      expect(await cosmicToken.isMinter(addr3)).to.be.true;
    });

    it("Admin should be able to revoke minter but not admin", async function () {
      expect(await cosmicToken.isAdmin(addr2)).to.be.true;

      await cosmicToken.connect(addr2).giveMinterRole(addr3.address);
      expect(await cosmicToken.isMinter(addr3)).to.be.true;

      await cosmicToken.connect(addr2).revokeMinterRole(addr3.address);
      expect(await cosmicToken.isMinter(addr3)).to.be.false;

      await cosmicToken.connect(owner).giveAdminRole(addr3.address);
      expect(await cosmicToken.isAdmin(addr3)).to.be.true;
      await expect(cosmicToken.connect(addr2).revokeAdminRole(addr3.address)).to.be.reverted;
    });
  });

  describe("Minting", function () {
    it("Should allow minter to mint tokens", async function () {
      const initialBalance = await cosmicToken.balanceOf(addr1.address);
      const amountToMint = parseUnits("100");

      await cosmicToken.connect(addr1).mint(addr1.address, amountToMint);
      let finalBalance = await cosmicToken.balanceOf(addr1.address);
      expect(Number(finalBalance)).to.equal(Number(initialBalance) + Number(amountToMint));
    });

    it("Should not allow non-minter to mint tokens", async function () {
      const amountToMint = parseUnits("100");

      await expect(cosmicToken.connect(addr3).mint(addr2.address, amountToMint)).to.be.revertedWith(
        "AccessControl: account " + addr3.address.toLowerCase() + " is missing role " + MINTER_ROLE
      );
    });
  });

  describe("Blacklisting", function () {
    it("Should allow admin or owner to blacklist user", async function () {
      const userAddress = addr3.address;

      await cosmicToken.connect(owner).blacklistUser(userAddress, true);
      const isBlacklisted = await cosmicToken.isUserBlacklisted(userAddress);

      expect(isBlacklisted).to.be.true;
    });

    it("Should allow admin or owner to unblacklist user", async function () {
      const userAddress = addr3.address;

      await cosmicToken.connect(owner).blacklistUser(userAddress, true);

      await cosmicToken.connect(owner).unblacklistUser(userAddress);
      const isBlacklisted = await cosmicToken.isUserBlacklisted(userAddress);

      expect(isBlacklisted).to.be.false;
    });

    it("Should not allow owner to blacklist himself", async function () {
      await expect(cosmicToken.connect(owner).blacklistUser(owner.address, true)).to.be.revertedWith(
        "Cannot blacklist owner"
      );

      const isBlacklisted = await cosmicToken.isUserBlacklisted(owner.address);
      expect(isBlacklisted).to.be.false;
    });

    it("Should allow admin to blacklist users but not the owner", async function () {
      await cosmicToken.connect(addr2).blacklistUser(addr3.address, true);
      let isAddr3Blacklisted = await cosmicToken.isUserBlacklisted(addr3.address);
      expect(isAddr3Blacklisted).to.be.true;

      await expect(cosmicToken.connect(addr2).blacklistUser(owner.address, true)).to.be.revertedWith(
        "Cannot blacklist owner"
      );

      const isOwnerBlacklisted = await cosmicToken.isUserBlacklisted(owner.address);
      expect(isOwnerBlacklisted).to.be.false;
    });

    it("Should allow non-blacklisted users to transfer tokens", async function () {
      const amountToMint = parseUnits("100");
      await cosmicToken.connect(addr1).mint(addr3.address, amountToMint);

      const amountToTransfer = parseUnits("50");
      await cosmicToken.connect(addr3).transfer(addr2.address, amountToTransfer);

      const finalBalanceAddr2 = await cosmicToken.balanceOf(addr2.address);
      const finalBalanceAddr3 = await cosmicToken.balanceOf(addr3.address);

      expect(Number(finalBalanceAddr2)).to.equal(Number(amountToTransfer));
      expect(Number(finalBalanceAddr3)).to.equal(Number(amountToMint) - Number(amountToTransfer));
    });

    it("Should not allow blacklisted users to transfer tokens", async function () {
      const amountToMint = parseUnits("100");
      await cosmicToken.connect(addr1).mint(addr3.address, amountToMint);
      await cosmicToken.connect(owner).blacklistUser(addr3.address, true);

      const isBlacklistedBeforeTransfer = await cosmicToken.isUserBlacklisted(addr3.address);
      console.log("Is blacklisted before transfer:", isBlacklistedBeforeTransfer);

      await expect(cosmicToken.connect(addr3).transfer(addr2.address, parseUnits("50"))).to.be.revertedWith(
        "CosmicToken: sender is blacklisted");
    });
  });
});