import ANVIL_DEPLOYMENT from "./script/anvil/core__deployment.json";
import ANVIL_LATEST_RUN from "./broadcast/KudosDeployment.s.sol/31337/run-latest.json";

const CONFIG_BY_CHAIN_ID = {
  [31337]: {
    deployment: ANVIL_DEPLOYMENT,
    latestRun: ANVIL_LATEST_RUN,
  },
} as const;

type ChainId = keyof typeof CONFIG_BY_CHAIN_ID;
type Deployment = (typeof CONFIG_BY_CHAIN_ID)[ChainId]["deployment"];
type LatestRun = (typeof CONFIG_BY_CHAIN_ID)[ChainId]["latestRun"];
type ProtocolConfig = Deployment["ProtocolConfig"];

export {
  type ChainId,
  type Deployment,
  type LatestRun,
  type ProtocolConfig,
  ANVIL_DEPLOYMENT,
  ANVIL_LATEST_RUN,
  CONFIG_BY_CHAIN_ID,
};
