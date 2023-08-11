import jwt from "jsonwebtoken";
import passportLocal from "passport-local";
import passportBearer from "passport-http-bearer";
import { getTokenSecret } from "../shared/config/config";
import { getUser, getUserByEmail } from "../models/User";

export const getLocalStrategy = () => {
  return new passportLocal.Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, _password, callback) => {
      const user = await getUserByEmail(username);

      return user !== null ? callback(null, user) : callback(null, false);
    }
  );
};

export const getBearerStrategy = () => {
  return new passportBearer.Strategy((token, callback) => {
    jwt.verify(token, getTokenSecret(), async (err, decoded) => {
      if (err === null) {
        const user = await getUser(decoded.id);
        if (user !== null) {
          return callback(null, user);
        }
      }

      return callback(null, false);
    });
  });
};
