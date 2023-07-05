async function main() {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")

  // Deploy contract
  const token = await Token.deploy('Dapp University', 'DAPP', '1000000')
  await token.deployed()
  console.log(`Token deployed to: ${token.address}`) // So that we can see the deployment happening in real time
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
