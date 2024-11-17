// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";

/**
 * @title ReferenceLogic
 * @author omc.sh
 */
library ReferenceLogic {
    /**
     * @notice Creates a new reference structure
     * @param metadata The IPFS hash or other metadata for the reference
     * @param author The address of the reference author
     * @return Reference memory The newly created reference
     */
    function createReference(
        string memory metadata,
        address author
    ) internal pure returns (DataTypes.Reference memory) {
        return
            DataTypes.Reference({
                author: author,
                metadata: metadata,
                status: DataTypes.ReferenceStatus.PENDING
            });
    }
}
