// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {console} from "forge-std/console.sol";
import {TestHelper} from "./TestHelper.sol";
import {Test} from "forge-std/Test.sol";
import {Kudos} from "@/protocol/kudos/Kudos.sol";

abstract contract KudosZeroState is Test, TestHelper {
    function setUp() public virtual {
        vm.startPrank(deployer);

        // Deploy Kudos
        kudos = new Kudos(deployer);

        vm.stopPrank();

        // Label addresses for easier debugging
        vm.label(deployer, "Deployer");
        vm.label(einstein, "Einstein");
        vm.label(newton, "Newton");
        vm.label(curie, "Curie");
        vm.label(address(kudos), "Kudos");

        // Make contracts persistent
        vm.makePersistent(address(kudos));

        console.log("Deployed contracts:");
        console.log("Kudos:                ", address(kudos));
    }
}
