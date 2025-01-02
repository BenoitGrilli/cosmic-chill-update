// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./CosmicToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Airdrop is Ownable {
    CosmicToken public token;
    mapping(address => bool) public hasClaimed;

    uint256 public constant TOKENS_PER_CLAIM = 1000 * (10**18);

    event AirdropClaimed(address indexed claimant, uint256 amount);
    event AirdropUnclaimed(address indexed claimant);

    constructor(address _token) {
        token = CosmicToke(_token);
    }

    function claimAirdrop() external {
        require(!hasClaimed[msg.sender], "Airdrop: You have already claimed your airdrop");
        require(token.balanceOf(address(this)) >= TOKENS_PER_CLAIM, "Airdrop: Insufficient balance in contract");

        hasClaimed[msg.sender] = true;

        require(token.transfer(msg.sender, TOKENS_PER_CLAIM), "Airdrop: Transfer failed");

        emit AirdropClaimed(msg.sender, TOKENS_PER_CLAIM);
    }

    function clearHasClaimed(address _addr) external onlyOwner {
        require(hasClaimed[_addr], "Airdrop: Address has not claimed");

        hasClaimed[_addr] = false;

        emit AirdropUnclaimed(_addr);
    }
}
