import { MyContext } from "../types.js";

import { authenticateGoogle } from "../../utils/passportGoogleAuth.js";

export const UserMutation = {
  signUpGoogle: async (_: any, { accessToken }: any, MyContext: MyContext) => {
    const { models, req, res } = MyContext;
    const { User } = models;

    req.body = {
      ...req.body,
      // eslint-disable-next-line
      access_token: accessToken,
    };

    try {
      // data contains the accessToken, refreshToken and profile from passport
      const data: any = await authenticateGoogle(req, res);

      console.log(data);
      // if (info) {
      //   switch (info.code) {
      //     case "ETIMEDOUT":
      //       throw new Error("Failed to reach Google: Try Again");
      //     default:
      //       throw new Error("something went wrong");
      //   }
      // }
      // // If not Error take user information
      // const { _json } = data.profile;
      // // Deconstruct user information from _json data
      // const { email } = _json;
      // const firstName = _json.given_name;
      // const lastName = _json.family_name;

      // let accessToken = "";
      // let refreshToken = "";
      // let message = "";

      // // Check if user is registered
      // const userExist = await User.findOne({
      //   where: {
      //     email: email.toLowerCase().replace(/ /gi, ""),
      //   },
      // });

      // if (!userExist) {
      //   const newUser = await User.create({
      //     email: email.toLowerCase().replace(/ /gi, ""),
      //     firstName,
      //     lastName,
      //   });
      //   // generate Token
      //   // create a function that will generate token a sign it for you.
      //   //accessToken = await generateToken(newUser.dataValues.id);
      //   //refreshToken = await generateToken(newUser.dataValues.id, true);

      //   return {
      //     message,
      //     accessToken: `Bearer ${accessToken}`,
      //     refreshToken: `Bearer ${refreshToken}`,
      //   };
      // }
      // // generate Token
      // //accessToken = await generateToken(userExist.dataValues.id);
      // //refreshToken = await generateToken(userExist.dataValues.id, true);

      // return {
      //   message,
      //   accessToken: `Bearer ${accessToken}`,
      //   refreshToken: `Bearer ${refreshToken}`,
      // };
    } catch (error) {
      return error;
    }
  },
};
