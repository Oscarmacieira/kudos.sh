// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Errors
 * @author omc.sh
 */
library Errors {
    string constant CALLER_NOT_RECIPIENT = "1"; // Caller is not the recipient
    string constant REFERENCE_NOT_CREATED = "2"; // Reference is not created
    string constant AUTHOR_CANNOT_BE_RECIPIENT = "3"; // Author cannot be the recipient
}
