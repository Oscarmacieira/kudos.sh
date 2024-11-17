import type { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_API_URL } from "./src/client";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:42069/graphql",
  documents: "./src/graphql/**/**/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
