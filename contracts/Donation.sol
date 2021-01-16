pragma solidity ^0.5.0;

contract Donation {
    address[12] public Donators;

    function Donate(uint RecipientID) public returns (uint) {
        require(RecipientID >= 0 && RecipientID <=11);
        Donators[RecipientID] = msg.sender;
        return RecipientID;
    }

    function getDonators() public view returns (address[12] memory) {
        return Donators;
    }
}