#! /bin/bash

source .env
echo "[+] Deploying to anvil"
forge script script/anvil/KudosDeployment.s.sol --rpc-url $ANVIL_RPC_URL --broadcast --private-key $DEPLOYER_PRIVATE_KEY
