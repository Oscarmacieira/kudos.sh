import { actions, foundry } from "@wagmi/cli/plugins";
import { defineConfig } from "@wagmi/cli";
import { FOUNDRY_PLUGIN_CONFIG } from "./foundry.plugin";

export default defineConfig({
  out: "../typescript-contracts/src/generated.ts",
  plugins: [
    foundry(FOUNDRY_PLUGIN_CONFIG),
    actions({
      overridePackageName: "@wagmi/core",
    }),
  ],
});
