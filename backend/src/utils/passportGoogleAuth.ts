import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Request, Response } from "express";
// Define the Google OAuth2 client ID and secret
const GOOGLE_CLIENT_ID =
  "1096210330310-iv26pjpn92mfru0730ck2bin6c0fi5sg.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// Create a passport strategy for Google OAuth2

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // adjust the URL as necessary
    },
    (accessToken, refreshToken, profile, done) => {
      // Here you can validate the access token and fetch user data from Google APIs
      // For simplicity, we'll just return the profile data
      done(null, { profile, accessToken });
    }
  )
);

export const authenticateGoogle = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    passport.authenticate("google", { session: false }, (err, user, info) => {
      if (err) {
        return reject(err);
      }
      resolve(user);
    })(req, res);
  });
