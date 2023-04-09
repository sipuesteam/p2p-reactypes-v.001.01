pragma solidity ^0.8.0;

import "@openzeppelin/contracts/payment/PaymentSplitter.sol";

contract Place2PaySubscription is PaymentSplitter {

    constructor(address[] memory payees, uint256[] memory shares) PaymentSplitter(payees, shares) {}

    function subscribe() external payable {
        require(msg.value > 0, "Payment required to subscribe.");
        release(payable(msg.sender));
    }

    receive() external payable {
        subscribe();
    }

}
