import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("AddressBook", function () {
  
  async function deployAddressBook() {

    const [owner, addr1, addr2, addr3, addr4, addr5] = await hre.ethers.getSigners();

    const AddressBook = await hre.ethers.getContractFactory("AddressBook");
    const addressBook = await AddressBook.deploy();

    return { addressBook, owner, addr1, addr2, addr3, addr4, addr5 };
  }

  describe("Deployment", function () {
    it("Should deploy smart contract", async function () {
      const { addressBook, owner } = await loadFixture(deployAddressBook);
    });
  });

  describe("Function Tests", function () {
    it("Should add a new contact", async function () {
      const { addressBook, owner, addr1, addr2 } = await loadFixture(deployAddressBook);

      await expect(addressBook.connect(addr1).addContact(addr2, "Staff 1"));
    });

    it("Should get all user contacts", async function () {
      const { addressBook, owner, addr1, addr2, addr3, addr4 } = await loadFixture(deployAddressBook);

      await addressBook.connect(addr1).addContact(addr2, "Staff 1");
      await addressBook.connect(addr1).addContact(addr3, "Staff 2");
      await addressBook.connect(addr1).addContact(addr4, "Staff 3");

      const contacts = await addressBook.connect(addr1).getContacts();
      expect(contacts.length).to.equal(3);
    });

    it("Shoud return a contact alias", async function () {
      const { addressBook, owner, addr1, addr2, addr3, addr4 } = await loadFixture(deployAddressBook);

      await addressBook.connect(addr1).addContact(addr2, "Staff 1");
      await addressBook.connect(addr1).addContact(addr3, "Staff 2");
      await addressBook.connect(addr1).addContact(addr4, "Staff 3");

      const alias = await addressBook.connect(addr1).getAlias(addr2);
      expect(alias).to.equal("Staff 1");
    });

    it("Shoud remove a contact", async function () {
      const { addressBook, owner, addr1, addr2, addr3, addr4 } = await loadFixture(deployAddressBook);

      await addressBook.connect(addr1).addContact(addr2, "Staff 1");
      await addressBook.connect(addr1).addContact(addr3, "Staff 2");
      await addressBook.connect(addr1).addContact(addr4, "Staff 3");

      await addressBook.connect(addr1).removeContact(addr2);
      await addressBook.connect(addr1).removeContact(addr4);
      const contacts = await addressBook.connect(addr1).getContacts();
      expect(contacts.length).to.equal(1);
    });
  });
});