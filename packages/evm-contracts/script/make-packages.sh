#! /bin/bash

# build the @repo/evm-contracts package
echo "Building the @repo/evm-contracts package"
yarn build

# generate the new wagmi packages
echo "Generating the new wagmi packages"
cd ../wagmi-config
yarn generate

# build the @repo/typescript-contracts package
echo "Building the @repo/typescript-contracts package"
cd ../typescript-contracts
yarn build

# build the @repo/react-contracts package
echo "Building the @repo/react-contracts package"
cd ../react-contracts
yarn build
