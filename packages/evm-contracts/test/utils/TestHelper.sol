//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {console} from "forge-std/console.sol";
import {Test} from "forge-std/Test.sol";
import {TestData} from "./TestData.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract TestHelper is Test, TestData {
    /////////////////////////////////////////////////////////////////
    // BALANCE FUNCTIONS
    /////////////////////////////////////////////////////////////////

    function getBalance(
        address erc20,
        address who
    ) internal view returns (uint256) {
        return IERC20(erc20).balanceOf(who);
    }

    /////////////////////////////////////////////////////////////////
    // HELPER FUNCTIONS
    /////////////////////////////////////////////////////////////////

    function _advanceTime(uint256 timeInSeconds) internal {
        vm.warp(block.timestamp + timeInSeconds);
    }

    function _setBalance(address account, uint256 amount) internal {
        vm.deal(account, amount);
    }

    function _createAddresses(
        address[] memory addresses,
        uint256 amount
    ) internal {
        for (uint256 i = 0; i < addresses.length; i++) {
            addresses[i] = vm.addr(uint256(i) + 1000);
            vm.label(
                addresses[i],
                string.concat("Address ", Strings.toString(i + 1))
            );

            vm.deal(addresses[i], amount);
            vm.makePersistent(addresses[i]);
        }
    }
}
