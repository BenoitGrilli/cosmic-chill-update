// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./abstract/Controlable.sol";

contract CosmicToken is ERC20, Controlable {
    constructor(
        address minter,
        address admin
    ) ERC20("CosmicToken", "COSMIC") Controlable(minter, admin) {
        // Note: It's okay to have a constructor here and in Controlable.sol
        // However, for upgradeable contracts, you'll need to use initializer functions instead
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function blacklistUser(address user, bool shouldBlacklist) external onlyAdminOrOwner returns (bool) {
        return _blacklistUser(user, shouldBlacklist);
    }

    function unblacklistUser(address user) external onlyAdminOrOwner returns (bool) {
        return _unBlacklistUser(user);
    }

    function isUserBlacklisted(address user) external view returns (bool) {
        return _isBlacklistedUser(user);
    }

    function transfer(address to, uint256 amount) public override returns (bool) {
        require(!_isBlacklistedUser(msg.sender), "CosmicToken: sender is blacklisted");
        require(!_isBlacklistedUser(to), "CosmicToken: recipient is blacklisted");
        return super.transfer(to, amount);
    }

    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        require(!_isBlacklistedUser(from), "CosmicToken: sender is blacklisted");
        require(!_isBlacklistedUser(to), "CosmicToken: recipient is blacklisted");
        return super.transferFrom(from, to, amount);
    }

    // TODO: Override approve, increaseAllowance, decreaseAllowance, _beforeTokenTransfer
}