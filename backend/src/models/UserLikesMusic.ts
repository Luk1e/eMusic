import sequelize from "../database/sequelize.js";

const UserLikesMusic = sequelize.define(
  "User_Likes_Music",
  {},
  { timestamps: false }
);

export default UserLikesMusic;
