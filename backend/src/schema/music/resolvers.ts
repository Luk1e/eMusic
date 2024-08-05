import { MyContext, MusicType } from "../types.js";

export const MusicResolvers = {
  author: async (parent: MusicType, args: any, { models }: MyContext) => {
    return await models?.Author.findOne({ where: { id: parent.id } });
  },
};
