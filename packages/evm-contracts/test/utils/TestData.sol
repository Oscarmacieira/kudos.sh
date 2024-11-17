// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {Kudos} from "@/protocol/kudos/Kudos.sol";
import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";

contract TestData is Test {
    // Contracts
    Kudos public kudos;

    // Addresses
    address deployer = vm.addr(12_345);
    address public einstein = vm.addr(301_035);
    address public newton = vm.addr(9812);
    address public curie = vm.addr(123_456);

    // DATA
    string public METADATA = "test";
}
