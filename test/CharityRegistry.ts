import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CharityRegistry", function () {
  // We define a fixture to reuse the same setup in every test.

  async function deployCharityFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, Account1, Account2] = await ethers.getSigners();

    const CharityRegistry = await ethers.getContractFactory("CharityRegistry");
    const charityRegistry = await CharityRegistry.deploy();

    return { charityRegistry, owner, Account1, Account2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { charityRegistry, owner } = await loadFixture(deployCharityFixture);

      expect(await charityRegistry.owner()).to.equal(owner.address);
    });
  });

  describe("Add Charity", function () {
    it('should add a new charity', async function() {
      const { charityRegistry, Account1 } = await loadFixture(deployCharityFixture);
      const tx = await charityRegistry.addCharity('Charity 1', 'Mission 1', 'https://www.charity1.com', true, Account1.address);
      const receipt = await tx.wait()

      const charityIdLogged = ethers.BigNumber.from(receipt.logs[0].topics[1]).toNumber();
      expect(charityIdLogged).to.equal(0);

      // Checkes if the latest charity id is equal to the one just added
      const numberOfRegisteredCharities = await charityRegistry.charityIdCounter();
      const charityId = await charityRegistry.charityIds(numberOfRegisteredCharities.toNumber() - 1);
      expect(charityId).to.equal(0);

      const charity = await charityRegistry.charities(charityId);
      expect(charity.name).to.equal('Charity 1');
      expect(charity.mission).to.equal('Mission 1');
      expect(charity.website).to.equal('https://www.charity1.com');
      expect(charity.active).to.be.true;
      expect(charity.wallet).to.equal(Account1.address);

      // @ts-ignore events should always have at least one event in this case CharityAdded
      expect(receipt.events[0].event).to.equal('CharityAdded');
      });

    it('should only allow the owner to add new charities', async function () {
      const { charityRegistry, Account1 } = await loadFixture(deployCharityFixture);
      await expect(charityRegistry.connect(Account1).addCharity(
        'Charity 1', 'Mission 1', 'https://www.charity1.com', true, Account1.address)).to.be.revertedWith(
          "Only the owner can add new charities.");
    });
  });

  describe("Update Charity", function () {
    it("should update an existing charity", async function () {
      const { charityRegistry, Account1, Account2 } = await loadFixture(deployCharityFixture);
      await charityRegistry.addCharity('Charity 1', 'Mission 1', 'https://www.charity1.com', true, Account1.address);
      const charityId = (await charityRegistry.charityIdCounter()).toNumber() - 1;
      const tx = await charityRegistry.updateCharity(charityId, 'Charity 1 Updated', 'Mission 1 Updated', 'https://www.charity1-updated.com', false, Account2.address);
      const receipt = await tx.wait()

      const charity = await charityRegistry.charities(charityId);
      expect(charity.name).to.equal('Charity 1 Updated');
      expect(charity.mission).to.equal('Mission 1 Updated');
      expect(charity.website).to.equal('https://www.charity1-updated.com');
      expect(charity.active).to.equal(false);
      expect(charity.wallet).to.equal(Account2.address);

      // @ts-ignore events should always have at least one event in this case CharityUpdated
      expect(receipt.events[0].event).to.equal('CharityUpdated');
    })

    it('should only allow the owner to update charities', async () => {
      const { charityRegistry, Account1, Account2 } = await loadFixture(deployCharityFixture);
      const tx = await charityRegistry.addCharity('Charity 1', 'Mission 1', 'https://www.charity1.com', true, Account1.address);
      const charityId = (await charityRegistry.charityIdCounter()).toNumber() - 1;
      await tx.wait()
      await expect(charityRegistry.connect(Account1).updateCharity(
        charityId, 'Charity 1 Updated', 'Mission 1 Updated', 'https://www.charity1-updated.com', false, Account2.address)).to.be.revertedWith(
          "Only the owner can add new charities.");
    });
  });

  describe("Donations", function () {
    it('should allow users to donate to a registered charity', async () => {
      const { charityRegistry, Account1, Account2 } = await loadFixture(deployCharityFixture);
      await charityRegistry.addCharity('Charity 1', 'Mission 1', 'https://www.charity1.com', true, Account1.address);
      const prevBalance = await ethers.provider.getBalance(Account1.address);
      const charityId = (await charityRegistry.charityIdCounter()).toNumber() - 1;
      
      const tx = await charityRegistry.connect(Account2).donate(charityId, {
          value: 100
      });
      await tx.wait();

      const charity = await charityRegistry.charities(charityId);
      expect(charity.totalDonation.toNumber()).to.equal(100);
      expect((await ethers.provider.getBalance(charity.wallet)).toBigInt() - prevBalance.toBigInt()).to.equal(100);
    });

    it('should only allow donations to valid charity Ids', async function() {
      const { charityRegistry, Account1, Account2 } = await loadFixture(deployCharityFixture);
      await charityRegistry.addCharity('Charity 1', 'Mission 1', 'https://www.charity1.com', true, Account1.address);
      const fakeCharityId = 2;
      await expect(charityRegistry.connect(Account2).donate(fakeCharityId, {
          value: 100
      })).to.be.revertedWith("Invalid charity ID");
    });
  
    it('should only allow donations to active charities', async function() {
      const { charityRegistry, Account1, Account2 } = await loadFixture(deployCharityFixture);
      await charityRegistry.addCharity('Charity 1', 'Mission 1', 'https://www.charity1.com', false, Account1.address);
      const charityId = (await charityRegistry.charityIdCounter()).toNumber() - 1;
      
      await expect(charityRegistry.connect(Account2).donate(charityId, {
          value: 100
      })).to.be.revertedWith("Charity is not active");
    });
  });

});
