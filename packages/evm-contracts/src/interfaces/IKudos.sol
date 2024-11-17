// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";

/**
 * @title IKudos
 * @author omc.sh
 * @notice The interface for the Kudos contract
 */
interface IKudos {
    /**
     * @notice Error emitted when the caller is not the recipient
     */
    error OnlyRecipientAllowed();

    /**
     * @notice Emitted when a reference is added
     * @param recipient The address of the recipient
     * @param author The address of the author
     * @param index The index of the reference
     */
    event ReferenceAdded(
        address indexed recipient,
        address indexed author,
        uint256 index
    );

    /**
     * @notice Emitted when a reference is hidden
     * @param recipient The address of the recipient
     * @param index The index of the reference
     */
    event ReferenceHidden(address indexed recipient, uint256 index);

    /**
     * @notice Emitted when a reference is shown
     * @param recipient The address of the recipient
     * @param index The index of the reference
     */
    event ReferenceShown(address indexed recipient, uint256 index);

    /**
     * @notice Adds a reference to the contract
     * @param recipient The address of the recipient
     * @param metadata The metadata of the reference
     */
    function addReference(address recipient, string memory metadata) external;

    /**
     * @notice Hides a reference
     * @param recipient The address of the recipient
     * @param index The index of the reference
     */
    function hideReference(address recipient, uint256 index) external;

    /**
     * @notice Shows a reference
     * @param recipient The address of the recipient
     * @param index The index of the reference
     */
    function showReference(address recipient, uint256 index) external;

    /**
     * @notice Get the reference count for a recipient
     * @param recipient The address of the recipient
     * @return The number of references for the recipient
     */
    function getReferenceCount(
        address recipient
    ) external view returns (uint256);

    /**
     * @notice Get a reference by index
     * @param recipient The address of the recipient
     * @param index The index of the reference
     * @return The reference
     */
    function getReference(
        address recipient,
        uint256 index
    ) external view returns (DataTypes.Reference memory);
}
