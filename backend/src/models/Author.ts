import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const Author = sequelize.define("Author", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NumberOfSongs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Author;
