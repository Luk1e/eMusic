import sequelize from "../database/sequelize.js";

const UserDislikesMusic = sequelize.define(
  "User_Dislikes_Music",
  {},
  { timestamps: false }
);

export default UserDislikesMusic;
