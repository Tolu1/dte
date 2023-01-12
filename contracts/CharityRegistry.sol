// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// The CharityRegistry contract stores a list of registered charities and allows users to donate to them.
contract CharityRegistry {
  // Struct to store the details of a charity
  struct Charity {
    string name;
    string mission;
    address wallet;
  }

  // Mapping from charity id to charity details
  mapping(uint => Charity) public charities;

  // Array to store the list of charity ids in the order they were added
  uint[] public charityIds;

  // Counter to generate unique ids for charities
  uint public charityIdCounter;

  // Events to track when a charity is added or when a donation is made
  event CharityAdded(uint charityId, string name, string mission, address wallet);
  event DonationMade(uint charityId, address donor, uint amount);

  // Function to add a new charity to the registry
  function addCharity(string memory name, string memory mission, address wallet) public {
    // Generate a unique id for the charity
    uint charityId = charityIdCounter++;

    // Create a new charity struct and add it to the mapping
    charities[charityId] = Charity(name, mission, wallet);

    // Add the charity id to the list of charity ids
    charityIds.push(charityId);

    // Emit an event to track the addition of the charity
    emit CharityAdded(charityId, name, mission, wallet);
  }

  // Function to allow users to donate to a registered charity
  function donate(uint charityId, uint amount) public {
    // Get the details of the charity
    Charity storage charity = charities[charityId];

    // Ensure that the charity exists
    require(charity.name != "", "Charity does not exist");

    // Transfer the donation amount to the charity's wallet
    charity.wallet.transfer(amount);

    // Emit an event to track the donation
    emit DonationMade(charityId, msg.sender, amount);
  }
}
