const { network, ethers } = require("hardhat");

async function main() {
  console.log("Déploiement des contrats sur localhost...");

  const [deployer, minter, admin] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  // Deploy CosmicToken
  const CosmicToken = await ethers.getContractFactory("CosmicToken");
  const cosmicToken = await CosmicToken.deploy(minter.address, admin.address);
  await cosmicToken.waitForDeployment();
  console.log("CosmicToken déployé à :", await cosmicToken.getAddress());

  // Deploy Airdrop
  const Airdrop = await ethers.getContractFactory("Airdrop");
  const airdrop = await Airdrop.deploy(await cosmicToken.getAddress());
  await airdrop.waitForDeployment();
  console.log("Airdrop déployé à :", await airdrop.getAddress());

  // Test initial setup
  console.log("\nVérification des rôles:");
  console.log("Minter role:", await cosmicToken.isMinter(minter.address));
  console.log("Admin role:", await cosmicToken.isAdmin(admin.address));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });