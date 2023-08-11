import jwt from "jsonwebtoken";
import randtoken from "rand-token";
// import {
//   getLogin,
//   registerUser,
//   verifyUser,
//   resetPassword,
//   updatePassword,
// } from "../../services/auth.service";

import * as userService from "../../services/auth.service";

export const register = async (req, res) => {
  let { body } = req;
  try {
    const result = await userService.registerUser(body);

    return res
      .status(result.statusCode)
      .json({
        message: result.message,
        statusCode: result.statusCode,
         data: result.data,
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const resendRegisterEmail = async (req, res) => {
  const { body } = req;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const user = await User.getLoginUser(body.email.toString().toLowerCase());

    if (user !== null) {
      if (user.confirm === false) {
        resendRegisterEmail(body.email.toString().toLowerCase());
        return res.status(200).json();
      } else {
        return res.status(400).json({ msg: "Account already confirmed" });
      }
    }
    return res.status(404).json();
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const login = (req, res) => {
  const { body, user } = req;
  try {
    const result = userService.getLogin(body, user);
    return res
      .status(result.statusCode)
      .json({ message: result.message, data: result.data });
  } catch (error) {
    console.error(error.toString());
    return res.status(500).json({
      message: error.toString(),
      data: null,
    });
  }
};

export const confirm = async (req, res) => {
  const { token } = req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const result = await redis.getAsync(token);
    redis.del(token);

    if (result === null) {
      return res.status(400).json({ msg: "Confirm token is expired." });
    }

    const email = result.substring(0, result.indexOf(":confirm"));

    let us = await User.getLoginUser(email.toString().toLowerCase());
    const user = await User.findOne({
      raw: false,
      where: {
        id: us.id,
      },
    });

    if (user !== null) {
      await user.update({ confirm: true, status: "Verified" });
      addContact(user["dataValues"]["email"], user["dataValues"]["name"]);
      /** After confirmation token also login to the portal  */

      const randToken = randtoken.uid(256);
      const token1h = jwt.sign({ id: user.id }, config.auth.token_secret, {
        expiresIn: config.auth.token_expiry,
      });
      const refreshToken = randToken.replace(
        new RegExp("^.{" + token1h.length + "}"),
        jwt.sign({ id: user.id }, config.auth.token_secret, {
          expiresIn: config.auth.refresh_token_expiry,
        })
      );

      redis.set(refreshToken, token1h);

      return res.status(200).json({
        token: token1h,
        refreshToken: refreshToken,
        userId: user.id,
        redirectToLead: false,
        isPublicPage: false,
        permissionSettings: user.permissionSettings,
      });
      /** */
    }

    return res.status(400).json({ msg: "Email isn't confirmed." });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const verify = async (req, res) => {
  try {
    const user = await userService.verifyUser(req);
    return res.status(200).json({
      status: 200,
      message: "ok",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "error",
      status: 500,
    });
  }
};

export const resetPassword = async (req, res) => {
  console.log(req.body);
  try {
    const user = await userService.resetPassword(req.body);
    return res.status(200).json({
      status: 200,
      message: "ok",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "error",
      status: 500,
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const user = await userService.updatePassword(req);
    return res.status(200).json({
      status: 200,
      message: "ok",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "error",
      status: 500,
    });
  }
};
