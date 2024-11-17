// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title DataTypes
 * @author omc.sh
 * @notice A library that contains the different types of data used in the Kudos protocol
 */
library DataTypes {
    /**
     * @notice The status of a reference
     */
    enum ReferenceStatus {
        /// @notice The reference is not yet created
        NOT_CREATED,
        /// @notice The reference is pending verification
        PENDING,
        /// @notice The reference is visible
        VISIBLE,
        /// @notice The reference is hidden
        HIDDEN
    }

    /**
     * @notice A struct that contains the data of a reference
     */
    struct Reference {
        /// @notice The address of the author of the reference
        address author;
        /// @notice The metadata of the reference
        string metadata;
        /// @notice The status of the reference
        ReferenceStatus status;
    }
}
