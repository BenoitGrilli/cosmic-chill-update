// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

abstract contract Controlable is AccessControl {
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant TREASURY_ROLE = keccak256("TREASURY_ROLE");

    //mapping des users blacklist
    mapping(address => bool) private blacklistUser;

    // attribution de tous les rôles par défaut du msg sender (owner)
    constructor(address _minter, address _admin) {
        _grantRole(OWNER_ROLE, msg.sender); //@dev: owner is the deployer
        _grantRole(ADMIN_ROLE, _admin); //@dev: one of the dev team member
        _grantRole(MINTER_ROLE, _minter); // @dev: Web2 relayer
    }

    // pour les fonctions qui peuvent être exécutées par les admins ou l'owner , par exemple blacklist
    modifier onlyAdminOrOwner() {
        require(
            hasRole(ADMIN_ROLE, msg.sender) || hasRole(OWNER_ROLE, msg.sender),
            "Caller is not an admin or owner"
        );
        _;
    }

    function giveOwnerRole(address account) external onlyRole(OWNER_ROLE) returns (bool success) {
        _grantRole(OWNER_ROLE, account);
        return true;
    }

    function giveAdminRole(address account) external onlyRole(OWNER_ROLE) returns (bool success) {
        _grantRole(ADMIN_ROLE, account);
        return true;
    }

    function giveMinterRole(address account) external onlyAdminOrOwner returns (bool success) {
        _grantRole(MINTER_ROLE, account);
        return true;
    }

    function revokeAdminRole(address account) external onlyRole(OWNER_ROLE) returns (bool success) {
        _revokeRole(ADMIN_ROLE, account);
        return true;
    }    

    function revokeMinterRole(address account) external onlyAdminOrOwner returns (bool success) {
        _revokeRole(MINTER_ROLE, account);
        return true;
    }  

    function isOwner(address account) public view returns (bool) {
        return hasRole(OWNER_ROLE, account);
    }

    function isAdmin(address account) public view returns (bool) {
        return hasRole(ADMIN_ROLE, account);
    }

    function isMinter(address account) public view returns (bool) {
        return hasRole(MINTER_ROLE, account);
    }

    function _blacklistUser(address userAddress, bool set) internal returns (bool success) {
        require(!hasRole(OWNER_ROLE, userAddress), "Cannot blacklist owner");
        blacklistUser[userAddress] = set;
        return true;
    }

    function _unBlacklistUser(address userAddress) internal returns (bool success) {
        return _blacklistUser(userAddress, false);
    }

    function _isBlacklistedUser(address userAddress) internal view returns (bool) {
        return blacklistUser[userAddress];
    }
}