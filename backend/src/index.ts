import { server, httpServer, expressMiddleware, db } from "./config/apollo.js";
import app from "./config/server.js";
import dotenv from "dotenv";
dotenv.config();

async function startServer() {
  await server.start();

  app.use(
    "/",
    expressMiddleware(server, {
      context: async ({ req, res }) => ({
        req,
        res,
        models: db.models,
      }),
    })
  );

  await db.sequelize.sync({ alter: true });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`);
}

startServer().catch((error) => {
  console.error("Server startup error:", error);
});
