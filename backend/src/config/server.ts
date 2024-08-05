import express from "express";
import cors from "cors";
import { admin, adminRouter } from "../admin/admin.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: [`http://localhost:${process.env.PORT}/`],
  credentials: true,
};

// AdminJS route
app.use(admin.options.rootPath, adminRouter);

// CORS middleware
app.use(cors(corsOptions));

export default app;
