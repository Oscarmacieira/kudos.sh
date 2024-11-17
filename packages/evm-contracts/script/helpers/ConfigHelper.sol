// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {console} from "forge-std/console.sol";
import {Test} from "forge-std/Test.sol";
import {DataTypes} from "../../src/protocol/libraries/types/DataTypes.sol";
import {TypesHelper} from "./TypesHelper.sol";

contract ConfigHelper is Test {
    function loadProtocolConfig(
        string memory configPath
    ) internal view returns (TypesHelper.ProtocolConfig memory protocolConfig) {
        string memory configData = vm.readFile(configPath);

        protocolConfig.owner = vm.parseJsonAddress(
            configData,
            ".ProtocolConfig.owner"
        );

        logProtocolConfig(protocolConfig);

        return protocolConfig;
    }

    function logProtocolConfig(
        TypesHelper.ProtocolConfig memory config
    ) internal pure {
        console.log("ProtocolConfig.owner %s", config.owner);
    }

    function _serializeProtocolConfig(
        string memory prefix,
        TypesHelper.ProtocolConfig memory config
    ) internal returns (string memory) {
        string memory configJson = vm.serializeAddress(
            prefix,
            "owner",
            config.owner
        );

        return configJson;
    }

    function _serializeContractsConfig(
        TypesHelper.AddressRegistry memory addressRegistry
    ) internal returns (string memory) {
        string memory contractsJson = vm.serializeAddress(
            "Contracts",
            "Kudos",
            addressRegistry.kudos
        );

        return contractsJson;
    }
}
