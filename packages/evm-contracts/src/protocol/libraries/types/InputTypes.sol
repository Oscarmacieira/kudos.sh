// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title InputTypes
 * @author omc.sh
 */
library InputTypes {
    /**
     * @notice A struct that contains the input data for the addReference function
     */
    struct AddReferenceInput {
        address author;
        address recipient;
        string metadata;
        uint256 index;
    }
}
