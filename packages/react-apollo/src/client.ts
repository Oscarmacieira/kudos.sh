import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL_BY_ENVIRONMENT = {
  development: "http://localhost:42069/graphql",
  production: "https://api.kudos.xyz/graphql",
};

const ENVIRONMENT = process.env.NODE_ENV as keyof typeof API_URL_BY_ENVIRONMENT;

export const GRAPHQL_API_URL = API_URL_BY_ENVIRONMENT[ENVIRONMENT];

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
