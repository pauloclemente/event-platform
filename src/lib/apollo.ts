import { ApolloClient, InMemoryCache } from "@apollo/client";
import { loadEnv } from "vite"

export const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()
})