// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {KudosZeroState} from "./KudosZeroState.sol";

contract BaseActions is KudosZeroState {
    /*//////////////////////////////////////////////////////////////
                         REFERENCE ACTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Adds a reference
     */
    function _addReference(
        address who,
        address recipient,
        string memory metadata
    ) internal {
        vm.startPrank(who);
        kudos.addReference(recipient, metadata);
        vm.stopPrank();
    }

    /**
     * @notice Hides a reference
     */
    function _hideReference(
        address who,
        address recipient,
        uint256 index
    ) internal {
        vm.startPrank(who);
        kudos.hideReference(recipient, index);
        vm.stopPrank();
    }

    /**
     * @notice Shows a reference
     */
    function _showReference(
        address who,
        address recipient,
        uint256 index
    ) internal {
        vm.startPrank(who);
        kudos.showReference(recipient, index);
        vm.stopPrank();
    }
}
