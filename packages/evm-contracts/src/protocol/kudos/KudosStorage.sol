// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";

/**
 * @title KudosStorage
 * @author omc.sh
 * @notice The storage contract for the Kudos protocol
 */
contract KudosStorage {
    /// @notice The mapping from address to their reference count
    mapping(address => uint256) internal _referenceCount;

    /// @notice The mapping from address to their references
    mapping(address => mapping(uint256 => DataTypes.Reference))
        internal _references;
}
