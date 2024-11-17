import { createConfig } from "@ponder/core";
import { ANVIL_CONFIG, ChainId, CONFIG_BY_CHAIN_ID } from "@repo/evm-contracts";
import { Address, getAddress, hexToNumber, http } from "viem";
import { kudosConfig } from "@repo/typescript-contracts";

const getContractDetails = (chainId: ChainId, contractName: string) => {
  const { latestRun } = CONFIG_BY_CHAIN_ID[chainId];
  const transaction = latestRun.transactions.find(
    (tx) => tx.contractName === contractName
  );
  const receipt = latestRun.receipts.find(
    (r) => r.transactionHash === transaction?.hash
  );

  if (!transaction || !receipt) {
    throw new Error(
      `Contract ${contractName} not found in deployment for chain ${chainId}`
    );
  }

  return {
    address: getAddress(transaction.contractAddress),
    startBlock: hexToNumber(receipt.blockNumber as Address),
  };
};
const chainId = Number(process.env.CHAIN_ID) as ChainId;

export default createConfig({
  networks: {
    anvil: {
      chainId: ANVIL_CONFIG.id,
      transport: http(process.env.PONDER_RPC_URL_31337),
      disableCache: true,
    },
  },
  contracts: {
    Kudos: {
      abi: kudosConfig.abi,
      network: {
        [CONFIG_BY_CHAIN_ID[chainId].name]: getContractDetails(
          chainId,
          "Kudos"
        ),
      },
    },
  },
});
