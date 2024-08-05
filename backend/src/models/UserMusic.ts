import sequelize from "../database/sequelize.js";

const UserMusic = sequelize.define("User_Music", {}, { timestamps: false });

export default UserMusic;
