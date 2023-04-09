const Place2PaySubscription = artifacts.require("Place2PaySubscription");

module.exports = function(deployer, network, accounts) {
  // Specify payees and shares
  const payees = [0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2, 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c];
  const shares = [2, 1];

  // Deploy contract
  deployer.deploy(Place2PaySubscription, payees, shares);
};
