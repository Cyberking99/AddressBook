import { ethers } from 'hardhat';

async function main() {
  const addressBook = await ethers.deployContract('AddressBook');

  await addressBook.waitForDeployment();

  console.log('AddressBook Contract Deployed at ' + addressBook.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});