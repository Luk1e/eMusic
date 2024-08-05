import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const Music = sequelize.define("Music", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dislikes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  favorites: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Music;
