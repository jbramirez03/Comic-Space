// const express = require('express');
// const path = require('path');
// const { ApolloServer } = require('apollo-server-express');
// const db = require('./config/connection');
// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');
import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import db from './config/connection.js';
import typeDefs from './typeDefs/schema.js';
import resolvers from './resolvers/index.js';
import auth from './utils/auth.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { execute, subscribe } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
export const pubsub = new PubSub();
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { createServer } from 'http';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3001;

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

const httpServer = createServer(app);
const server = new ApolloServer({
    schema,
    context: auth.authMiddleware
});

const startApolloServer = async () => {
    await server.start();
    return server.applyMiddleware({ app });
};

startApolloServer();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: auth.authMiddleware,
// });

// server.applyMiddleware({ app });

const subscriptionServer = SubscriptionServer.create(
    {
        // This is the `schema` we just created.
        schema,
        // These are imported from `graphql`.
        execute,
        subscribe,
        onConnect(connectionParams, webSocket, context) {
            console.log('Connected!');
        },
        onDisconnect(webSocket, context) {
            console.log('Disconnected!');
        },
    },
    {
        // This is the `httpServer` we created in a previous step.
        server: httpServer,
        // This `server` is the instance returned from `new ApolloServer`.
        path: server.graphqlPath,
    }
);


// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`API server running on port ${PORT}!`);
//         // log where we can go to test our GQL API
//         console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     });
// });
if (process.env.NODE_ENV === 'production') {
    console.log('YOU ARE IN THE PRODUCTION ENV');
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    app.use(
        '/static',
        express.static(path.join(__dirname, '../client/build/static'))
    );
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/'));
    });
}

['SIGINT', 'SIGTERM'].forEach((signal) => {
    process.on(signal, () => subscriptionServer.close());
});

db.once('open', () => {
    httpServer.listen(PORT, () => {
        if (process.env.NODE_ENV === 'production') {
            console.log('Production server started!');
        } else {
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        }
    })
});
