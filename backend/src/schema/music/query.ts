import { MyContext } from "../types.js";

export const MusicQuery = {
  music: async (_: any, args: any, { models }: MyContext) => {
    return await models?.User.findByPk(1);
  },
  musics: async (_: any, args: any, { models }: MyContext) => {
    return await models?.User.findAll();
  },
};
