// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {KudosStorage} from "./KudosStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";
import {IKudos} from "@/interfaces/IKudos.sol";
import {ReferenceLogic} from "@/protocol/libraries/logics/ReferenceLogic.sol";
import {Errors} from "@/protocol/libraries/helpers/Errors.sol";

/**
 * @title Kudos
 * @author omc.sh
 * @notice The main contract for the Kudos protocol where users can:
 * - Write references
 * - Hide references
 * - Show references
 */
contract Kudos is KudosStorage, Ownable, IKudos {
    constructor(address owner) Ownable(owner) {}

    /**
     * @notice Modifier to ensure the caller is the recipient
     */
    modifier onlyRecipient(address recipient) {
        require(recipient == _msgSender(), Errors.CALLER_NOT_RECIPIENT);
        _;
    }

    /**
     * @notice Modifier to ensure the reference index is valid
     */
    modifier onlyValidReference(uint256 index, address recipient) {
        require(
            index <= getReferenceCount(recipient),
            Errors.REFERENCE_NOT_CREATED
        );
        _;
    }

    /**
     * @notice Modifier to ensure the author is not the recipient
     */
    modifier onlyValidAuthor(address author) {
        require(author != _msgSender(), Errors.AUTHOR_CANNOT_BE_RECIPIENT);
        _;
    }

    /// @inheritdoc IKudos
    function addReference(
        address recipient,
        string memory metadata
    ) external onlyValidAuthor(recipient) {
        DataTypes.Reference memory newReference = ReferenceLogic
            .createReference(metadata, _msgSender());

        _referenceCount[recipient]++;
        uint256 index = getReferenceCount(recipient);
        _references[recipient][index] = newReference;

        emit ReferenceAdded(recipient, _msgSender(), index);
    }

    /// @inheritdoc IKudos
    function hideReference(
        address recipient,
        uint256 index
    ) external onlyRecipient(recipient) onlyValidReference(index, recipient) {
        _references[recipient][index].status = DataTypes.ReferenceStatus.HIDDEN;

        emit ReferenceHidden(recipient, index);
    }

    /// @inheritdoc IKudos
    function showReference(
        address recipient,
        uint256 index
    ) external onlyRecipient(recipient) onlyValidReference(index, recipient) {
        _references[recipient][index].status = DataTypes
            .ReferenceStatus
            .VISIBLE;

        emit ReferenceShown(recipient, index);
    }

    /// @inheritdoc IKudos
    function getReferenceCount(
        address recipient
    ) public view returns (uint256) {
        return _referenceCount[recipient];
    }

    /// @inheritdoc IKudos
    function getReference(
        address recipient,
        uint256 index
    ) public view returns (DataTypes.Reference memory) {
        return _references[recipient][index];
    }
}
