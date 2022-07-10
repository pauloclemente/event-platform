import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl589mio04y9o01uj0bz5fk6u/master',
    cache: new InMemoryCache()
})