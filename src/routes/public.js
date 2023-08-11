import express from "express";
import passport from "passport";

import * as userController from "../controllers/public/auth.controller";
import { upload } from "../controllers/public/upload.controller";
import { getFileMiddleware } from "../middlewares/files";

export const getPublicRouter = () => {
  const router = express.Router();
  router.post("/register", [], userController.register);
  router.post(
    "/login",
    [passport.authenticate("local", { session: false })],
    userController.login
  );
  router.patch("/verify", userController.verify);
  router.post("/resetpassword", userController.resetPassword);
  router.patch("/updatepassword", userController.updatePassword);
  router.post("/upload", [getFileMiddleware], upload);
  return router;
};
