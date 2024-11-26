# AddressBook
An AddressBook contract for managing contacts and aliases. It allows users to store and manage a list of contacts, associate custom aliases with each contact, and retrieve or modify their contact information. This contract uses mappings to store contact data and aliases, making sure that each user can have their own personal address book.

## Install dependencies:
```bash
npm install
```

## Compile Contracts:
```bash
npx hardhat compile
```
## Running Test
```bash
npx hardhat test
```

## Deploy the project
Rename **.env.sample** to **.env** and input your private key
```bash
npx hardhat run scripts/deploy.ts --network lisk-sepolia
```

## Verify Smart Contract
```bash
npx hardhat verify --network lisk-sepolia contract_address
```

Example:
```bash
npx hardhat verify --network lisk-sepolia 0x8b7F8F99B1dbA9e7CB3de9e5d8711fAa9857cE60
```

## Deployed Contract Address
```
0x8b7F8F99B1dbA9e7CB3de9e5d8711fAa9857cE60
```

## Explorer Link
Link to this deployed smart contract on Lisk Testnet Explorer: [https://sepolia-blockscout.lisk.com/address/0x8b7F8F99B1dbA9e7CB3de9e5d8711fAa9857cE60](https://sepolia-blockscout.lisk.com/address/0x8b7F8F99B1dbA9e7CB3de9e5d8711fAa9857cE60)