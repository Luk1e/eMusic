import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { dark, light, noSidebar } from "@adminjs/themes";

import db from "../database/db.js";
import sessionStore from "../database/sessionStore.js";
import authenticate from "./adminAuth.js";
import dotenv from "dotenv";
dotenv.config();

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const adminOptions = {
  defaultTheme: dark.id,
  availableThemes: [dark, light, noSidebar],
  resources: Object.values(db.models),
};

const admin = new AdminJS(adminOptions);
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: "sessionsecret",
  },
  null,
  {
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    secret: "sessionsecret",
    cookie: {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
    },
    name: "adminjs",
  }
);

export { admin, adminRouter };
