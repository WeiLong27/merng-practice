import React from 'react';
import App from './App';
import { ApolloClient, ApolloProvider } from "@apollo/client";
import {InMemoryCache} from 'apollo-cache-inmemory'
// import { cache } from "./cache";


const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:5000'
});

export default(
    <ApolloProvider client = {client}>
        <App></App>
    </ApolloProvider>
);