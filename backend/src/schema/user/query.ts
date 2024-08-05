import { MyContext } from "../types.js";

export const UserQuery = {
  user: async (_: any, args: any, { models }: MyContext) => {
    return await models?.User.findByPk(1);
  },
  users: async (parent: any, args: any, { models }: MyContext) => {
    return await models?.User.findAll();
  },
};
