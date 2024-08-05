import User from "./User.js";
import Author from "./Author.js";
import Music from "./Music.js";
import UserMusic from "./UserMusic.js";
import UserLikesMusic from "./UserLikesMusic.js";
import UserDislikesMusic from "./UserDislikesMusic.js";

// Set up associations
Author.hasMany(Music, { foreignKey: "authorId" });
Music.belongsTo(Author, { foreignKey: "authorId" });

User.belongsToMany(Music, { through: UserMusic });
Music.belongsToMany(User, { through: UserMusic });

User.belongsToMany(Music, { through: UserLikesMusic });
Music.belongsToMany(User, { through: UserLikesMusic });

User.belongsToMany(Music, { through: UserDislikesMusic });
Music.belongsToMany(User, { through: UserDislikesMusic });

const models = {
  Author,
  Music,
  User,
  UserMusic,
  UserLikesMusic,
  UserDislikesMusic,
};

export default models;
