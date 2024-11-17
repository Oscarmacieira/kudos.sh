import ANVIL_DEPLOYMENT from "./script/anvil/core__deployment.json";
import ANVIL_LATEST_RUN from "./broadcast/KudosDeployment.s.sol/31337/run-latest.json";

const ANVIL_CONFIG = {
  deployment: ANVIL_DEPLOYMENT,
  latestRun: ANVIL_LATEST_RUN,
  id: 31337,
  name: "anvil",
} as const;

const CONFIG_BY_CHAIN_ID = {
  [ANVIL_CONFIG.id]: ANVIL_CONFIG,
} as const;

type ChainId = keyof typeof CONFIG_BY_CHAIN_ID;
type Deployment = (typeof CONFIG_BY_CHAIN_ID)[ChainId]["deployment"];
type LatestRun = (typeof CONFIG_BY_CHAIN_ID)[ChainId]["latestRun"];
type ProtocolConfig = Deployment["ProtocolConfig"];
type EvmAddress = `0x${string}`;

export {
  type ChainId,
  type Deployment,
  type LatestRun,
  type ProtocolConfig,
  type EvmAddress,
  ANVIL_DEPLOYMENT,
  ANVIL_LATEST_RUN,
  ANVIL_CONFIG,
  CONFIG_BY_CHAIN_ID,
};
