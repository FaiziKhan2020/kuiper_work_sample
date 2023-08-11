import { transformUser } from "./transformers/user.transformer.js";
import * as userModel from "../models/User";

export const getMe = (user) => {
  try {
    const data = transformUser(user);
    return {
      message: "Success",
      data,
    };
  } catch (error) {
    console.log(`User Service > ${error.toString()}`);
    throw error;
  }
};

export const getUserById = async (payload) => {
  try {
    console.log(payload);
    return await userModel.getUser(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};
