// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {console} from "forge-std/console.sol";
import {Test} from "forge-std/Test.sol";
import {StorageHelper} from "./StorageHelper.sol";
import {ConfigHelper} from "./ConfigHelper.sol";
import {Kudos} from "@/protocol/kudos/Kudos.sol";

contract KudosHelper is Test, StorageHelper, ConfigHelper {
    function loadConfig(string memory configData) internal {
        console.log("================");
        protocolConfig = loadProtocolConfig(configData);
        console.log("================");
    }

    function serializeConfig() internal returns (string memory) {
        string memory serializedProtocolConfig = _serializeProtocolConfig(
            "ProtocolConfig",
            protocolConfig
        );

        string memory serializedContracts = _serializeContractsConfig(
            addressRegistry
        );

        string memory finalJson = vm.serializeString(
            "CoreDeployment",
            "Contracts",
            serializedContracts
        );

        finalJson = vm.serializeString(
            "CoreDeployment",
            "ProtocolConfig",
            serializedProtocolConfig
        );

        return finalJson;
    }

    function _deployProtocol() internal {
        kudos = new Kudos(protocolConfig.owner);
    }

    function deployContracts() internal {
        _deployProtocol();

        addressRegistry.kudos = address(kudos);

        console.log("\n--- Protocol Contracts ---");
        console.log("Kudos:                     %s", addressRegistry.kudos);

        console.log("\nAll contracts deployed and logged successfully.");
    }
}
