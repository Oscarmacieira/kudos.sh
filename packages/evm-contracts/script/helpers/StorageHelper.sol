// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {TypesHelper} from "./TypesHelper.sol";
import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";
import {Kudos} from "@/protocol/kudos/Kudos.sol";

contract StorageHelper {
    // Parameters
    TypesHelper.AddressRegistry public addressRegistry;
    TypesHelper.ProtocolConfig public protocolConfig;

    // Contracts
    Kudos public kudos;
}
