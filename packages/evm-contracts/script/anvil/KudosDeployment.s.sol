// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {console} from "forge-std/console.sol";
import {Script} from "forge-std/Script.sol";
import {KudosHelper} from "../helpers/KudosHelper.sol";

contract KudosDeployment is Script, KudosHelper {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        vm.startBroadcast(deployer);

        loadConfig("script/anvil/config__protocol.json");

        deployContracts();

        string memory finalJson = serializeConfig();

        vm.writeJson(finalJson, "./script/anvil/core__deployment.json");

        vm.stopBroadcast();
    }
}
