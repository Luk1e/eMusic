import { MyContext } from "../types.js";

export const UserResolvers = {
  favorites: async (_: any, args: any, { models }: MyContext) => {
    return await models?.UserMusic.findAll({ where: { userId: 1 } });
  },
};
