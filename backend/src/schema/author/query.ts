import { MyContext } from "../types.js";

export const AuthorQuery = {
  author: async (_: any, args: any, { models }: MyContext) => {
    return await models?.Author.findByPk(1);
  },
  authors: async (_: any, args: any, { models }: MyContext) => {
    return await models?.Author.findAll();
  },
};
