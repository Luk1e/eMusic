import session from "express-session";
import connectSessionSequelize from "connect-session-sequelize";
import sequelize from "./sequelize.js";

const SequelizeStore = connectSessionSequelize(session.Store);
const sessionStore = new SequelizeStore({
  db: sequelize,
  tableName: "session",
});
export default sessionStore;
