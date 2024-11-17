import { FoundryConfig } from "@wagmi/cli/plugins";
import {
  ANVIL_DEPLOYMENT,
  CONFIG_BY_CHAIN_ID,
  EvmAddress,
} from "@repo/evm-contracts";

const makeDeployments = () => {
  let deployments: FoundryConfig["deployments"] = {};

  for (const [chainId, config] of Object.entries(CONFIG_BY_CHAIN_ID)) {
    for (const [contractName, contractAddress] of Object.entries(
      config.deployment.Contracts
    )) {
      if (!deployments[contractName]) {
        deployments[contractName] = {};
      }

      if (typeof deployments[contractName] === "object") {
        const existingAddresses = deployments[contractName] as Record<
          number,
          EvmAddress
        >;

        deployments[contractName] = {
          ...existingAddresses,
          [chainId]: contractAddress as EvmAddress,
        };
      }
    }
  }

  return deployments;
};

export const FOUNDRY_PLUGIN_CONFIG: FoundryConfig = {
  project: "../evm-contracts",
  deployments: makeDeployments(),
};
