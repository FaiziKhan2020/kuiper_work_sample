import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import randtoken from "rand-token";
import * as userModel from "../models/User";
import * as companyModel from "../models/Company";
import * as campusModel from "../models/Campus";
import * as roleModel from "../models/Role";
import * as JwtToken from "../shared/config/config";
import * as jobs from "../jobs/emails/account-confirmation-email";
import { Roles } from "@prisma/client";

import { resetpassword } from "../jobs/emails/reset-password-email";

export const getLogin = (body, user) => {
  try {
    console.log(user.company_id);
    if (user !== null && bcrypt.compareSync(body.password, user.password)) {
      let randToken = randtoken.uid(256);
      let token = jwt.sign(
        { id: user.id, companyId: user.company_id },
        JwtToken.getTokenSecret(),
        {
          expiresIn: JwtToken.getTokenExpiry(),
        }
      );

      let refreshToken = randToken.replace(
        new RegExp("^.{" + token.length + "}"),
        jwt.sign({ id: user.id }, JwtToken.getTokenSecret(), {
          expiresIn: JwtToken.getRefreshTokenExpiry(),
        })
      );
      let data = {
        token,
        refreshToken,
      };
      return {
        message: "Success",
        statusCode: 200,
        data,
      };
    }
    return {
      message: "Username or password is incorrect",
      statusCode: 401,
      data: null,
    };
  } catch (error) {
    console.log(`Auth Service > getLogin > ${error.toString()}`);
    throw error;
  }
};

export const registerUser = async (body) => {
  try {
    const isUserExist = await userModel.getUserByEmail(body.email);
    if (isUserExist) {
      return {
        message: "Signup failed, User already exist",
        statusCode: 409,
      };
    }
    body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());
    const company = await companyModel.createDefaultCompany();
    if (!company) throw new Error("Organization could not be created");
    body.companyId = company.id;

    const campus = await campusModel.createDefaultCampus(body);
    if (!campus) throw new Error("campus could not be created");

    const user = await userModel.createUser(body);

    const { id } = user;
    const payload = {
      userId: id,
      companyId: body.companyId,
      role: Roles.SUPERADMIN,
    };
    await roleModel.createRole(payload);
    const token = jwt.sign(
      { id: user.id, companyId: body.companyId },
      JwtToken.getTokenSecret(),
      {
        expiresIn: "1h",
      }
    );
    console.log(token);
    jobs.registerEmail(body.email, token);
    let data = null;
    return {
      message: "Account created successfully!",
      statusCode: 200,
      data,
    };
  } catch (error) {
    console.log(`Auth Service > registerUser > ${error.toString()}`);
    throw error;
  }
};
// verify user
export const verifyUser = async (data) => {
  const token1 = data.header("Token");

  try {
    const verified = jwt.verify(token1, JwtToken.getTokenSecret());
    await userModel.verifyUser(verified);
    return {
      message: "success",
    };
  } catch (error) {
    console.log(`Auth Service > verifyUser > ${error.toString()}`);
    throw error;
  }
};
// resetPassword
export const resetPassword = async (body) => {
  try {
    const email = await userModel.getUserByEmail(body.email);

    const token = jwt.sign({ id: email.id }, JwtToken.getTokenSecret(), {
      expiresIn: "1h",
    });

    resetpassword(body.email, token);
    return {
      message: "success",
    };
  } catch (error) {
    console.log(`Auth Service > resetPassword > ${error.toString()}`);
    throw error;
  }
};

//update password
export const updatePassword = async (data) => {
  const token1 = data.header("Token");
  try {
    const verified = jwt.verify(token1, JwtToken.getTokenSecret());
    data.body.password = bcrypt.hashSync(
      data.body.password,
      bcrypt.genSaltSync()
    );

    const payload = {
      id: verified.id,
      password: data.body.password,
    };
    console.log(payload.id);
    const user = await userModel.resetPassword(payload);
    return {
      message: "success",
      data: user,
    };
  } catch (error) {
    console.log(`Auth Service > updatePassword > ${error.toString()}`);
    throw error;
  }
};
