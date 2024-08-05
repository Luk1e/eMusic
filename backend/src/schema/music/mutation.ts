import { MyContext } from "../types.js";

interface MusicCreateDataInput {
  title: string;
  author: string;
}

export const MusicMutation = {
  musicCreate: async (
    _: any,
    input: MusicCreateDataInput,
    { models }: MyContext
  ) => {
    const newMusic = await models?.User.create({
      title: input.title,
      author: input.author,
    });
    return newMusic;
  },
};
