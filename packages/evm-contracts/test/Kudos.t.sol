// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {BaseActions} from "./utils/BaseActions.sol";
import {DataTypes} from "@/protocol/libraries/types/DataTypes.sol";
import {Errors} from "@/protocol/libraries/helpers/Errors.sol";

contract KudosTest is Test, BaseActions {
    function setUp() public override {
        super.setUp();
        _addReference(curie, einstein, METADATA);
    }

    function test_addReference() public {
        assertEq(kudos.getReferenceCount(einstein), 1);
        _addReference(newton, einstein, METADATA);

        assertEq(kudos.getReferenceCount(einstein), 2);

        DataTypes.Reference memory ref = kudos.getReference(einstein, 1);
        assertEq(ref.author, curie);
        assertEq(ref.metadata, METADATA);
        assertEq(uint(ref.status), uint(DataTypes.ReferenceStatus.PENDING));
    }

    function test_hideReference() public {
        DataTypes.Reference memory ref = kudos.getReference(einstein, 1);
        assertEq(uint(ref.status), uint(DataTypes.ReferenceStatus.PENDING));

        _hideReference(einstein, einstein, 1);

        ref = kudos.getReference(einstein, 1);
        assertEq(uint(ref.status), uint(DataTypes.ReferenceStatus.HIDDEN));
    }

    function test_showReference() public {
        _hideReference(einstein, einstein, 1);
        _showReference(einstein, einstein, 1);

        DataTypes.Reference memory ref = kudos.getReference(einstein, 1);
        assertEq(uint(ref.status), uint(DataTypes.ReferenceStatus.VISIBLE));
    }

    function test_RevertWhen_CallerNotRecipient() public {
        vm.expectRevert(bytes(Errors.CALLER_NOT_RECIPIENT));
        _hideReference(newton, einstein, 1);

        vm.expectRevert(bytes(Errors.CALLER_NOT_RECIPIENT));
        _showReference(newton, einstein, 1);
    }

    function test_RevertWhen_ReferenceNotCreated() public {
        vm.expectRevert(bytes(Errors.REFERENCE_NOT_CREATED));
        _hideReference(einstein, einstein, 99);

        vm.expectRevert(bytes(Errors.REFERENCE_NOT_CREATED));
        _showReference(einstein, einstein, 99);
    }

    function test_RevertWhen_AuthorCannotBeRecipient() public {
        vm.expectRevert(bytes(Errors.AUTHOR_CANNOT_BE_RECIPIENT));
        _addReference(einstein, einstein, METADATA);
    }

    function test_getReferenceCount() public view {
        assertEq(kudos.getReferenceCount(einstein), 1);
        assertEq(kudos.getReferenceCount(newton), 0);
    }

    function test_getReference() public view {
        DataTypes.Reference memory ref = kudos.getReference(einstein, 1);
        assertEq(ref.author, curie);
        assertEq(ref.metadata, METADATA);
        assertEq(uint(ref.status), uint(DataTypes.ReferenceStatus.PENDING));
    }
}
