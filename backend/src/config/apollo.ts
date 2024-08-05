import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import app from "./server.js";
import db from "../database/db.js";
import { MyContext } from "../schema/types.js";
import { typeDefs, resolvers } from "../schema/index.js";

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

export { server, httpServer, expressMiddleware, db };
