const { expect } = require("chai");
const { ethers } = require("hardhat");
const { parseUnits } = require("ethers");

describe("Airdrop contract", function () {
  let cosmicToken;
  let airdrop;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    
    const CosmicToken = await ethers.getContractFactory("CosmicToken");
    cosmicToken = await CosmicToken.deploy(addr1.address, addr2.address);
    await cosmicToken.waitForDeployment();
    
    const Airdrop = await ethers.getContractFactory("Airdrop");
    airdrop = await Airdrop.deploy(await cosmicToken.getAddress());
    await airdrop.waitForDeployment();
  });

  describe("Claiming", function () {
    it("Should allow eligible users to claim airdrop", async function () {
      await cosmicToken.connect(addr1).mint(await airdrop.getAddress(), parseUnits("100"));

      expect(await cosmicToken.balanceOf(addr2.address)).to.equal(0);
      expect(await airdrop.hasClaimed(addr2.address)).to.be.false;
      
      await airdrop.connect(addr2).claimAirdrop();
      
      expect(await cosmicToken.balanceOf(addr2.address)).to.equal(parseUnits("3"));
      expect(await airdrop.hasClaimed(addr2.address)).to.be.true;
    });

    it("Should not allow claims when contract has insufficient balance", async function () {
      await expect(
        airdrop.connect(addr2).claimAirdrop()
      ).to.be.revertedWith("Airdrop: Insufficient balance in contract");
      
      expect(await airdrop.hasClaimed(addr2.address)).to.be.false;
      expect(await cosmicToken.balanceOf(addr2.address)).to.equal(0);
    });

    it("Should not allow double claims", async function () {
      await cosmicToken.connect(addr1).mint(await airdrop.getAddress(), parseUnits("100"));
      
      await airdrop.connect(addr2).claimAirdrop();
      
      await expect(
        airdrop.connect(addr2).claimAirdrop()
      ).to.be.revertedWith("Airdrop: You have already claimed your airdrop");
    });
  });

  describe("Admin functions", function () {
    it("Should allow owner to clear claim status", async function () {
      await cosmicToken.connect(addr1).mint(await airdrop.getAddress(), parseUnits("100"));
      await airdrop.connect(addr2).claimAirdrop();
      
      expect(await airdrop.hasClaimed(addr2.address)).to.be.true;
      
      await airdrop.connect(owner).clearHasClaimed(addr2.address);
      
      expect(await airdrop.hasClaimed(addr2.address)).to.be.false;
    });

    it("Should not allow non-owners to clear claim status", async function () {
      await cosmicToken.connect(addr1).mint(await airdrop.getAddress(), parseUnits("100"));
      await airdrop.connect(addr2).claimAirdrop();
      
      await expect(
        airdrop.connect(addr1).clearHasClaimed(addr2.address)
      ).to.be.reverted;
    });

    it("Should not allow clearing unclaimed addresses", async function () {
      await expect(
        airdrop.connect(owner).clearHasClaimed(addr2.address)
      ).to.be.revertedWith("Airdrop: Address has not claimed");
    });
  });
});