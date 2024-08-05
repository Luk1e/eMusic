import sequelize from "./sequelize.js";
import models from "../models/index.js";

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database: ", error);
  });

const db = { sequelize, models };
export default db;
