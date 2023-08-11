import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import randtoken from "rand-token";
import * as JwtToken from "../shared/config/config";
import * as studentModel from "../models/Student.js";
import { studentTransformer } from "./transformers/student.transformer.js";
import * as jobs from "../jobs/emails/student-invite-email";
import * as userModel from "../models/User";
import * as roleModel from "../models/Role";
import * as authService from "../services/auth.service";
import { Roles } from "@prisma/client";

export const createStudent = async (body) => {
  try {
    const student = await authService.updatePassword();
    return await studentModel.createStudent(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateStudent = async (data) => {
  try {
    const { body, params } = data;
    console.log(params.id);
    const payload = {
      firstName: body.firstName,
      lastName: body.lastName,
      gender: body.gender,
      religion: body.religion,
      contact: body.contact,
      address: body.address,
      section: body.section,
      rollNumber: body.rollNumber,
      profilePicture: body.profilePicture,
      dateOfBirth: body.dateOfBirth,
      enrollmentDate: body.enrollmentDate,
      batchId: body.batchId,
      campusId: body.campusId,
      parentId: body.parentId,
      classId: body.classId,
      st_id: params.id,
    };
    return await studentModel.updateStudent(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const getAllStudentOfCampus = async (body) => {
  try {
    const student = await studentModel.getAllStudentOfCampus(body);
    return studentTransformer(student);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const getStudentById = async (payload) => {
  try {
    const student = await studentModel.getStudentById(payload);
    return studentTransformer(student);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const deleteById = async (payload) => {
  try {
    return await studentModel.deleteById(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

// send invite
export const registerStudent = async (body) => {
  try {
    const isUserExist = await userModel.getUserByEmail(body.email);
    if (isUserExist) {
      return {
        message: "Signup failed, User already exist",
        statusCode: 409,
      };
    }
    body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());
    body.onboarded=true;

    const user = await userModel.createUser(body);
    const student = await studentModel.defaultStudent(body);
    const { id } = user;
    const payload = {
      userId: id,
      companyId: body.companyId,
      role: Roles.STUDENT,
    };

    await roleModel.createRole(payload);
    const token = jwt.sign(
      { id: user.id, st_id: student.id },
      JwtToken.getTokenSecret(),
      {
        expiresIn: "7d",
      }
    );
    console.log(token);
    jobs.invite(body.email, token);
    let data = null;
    return {
      message: "Account created successfully!",
      statusCode: 200,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

// Active Student Account
export const activeStudentAccount = async (data) => {
  try {
    const verified = jwt.verify(data.header, JwtToken.getTokenSecret());

    const { body } = data;
    body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());
    const payload = {
      firstName: body.firstName,
      lastName: body.lastName,
      gender: body.gender,
      password: body.password,
      religion: body.religion,
      contact: body.contact,
      address: body.address,
      section: body.section,
      rollNumber: body.rollNumber,
      profilePicture: body.profilePicture,
      dateOfBirth: body.dateOfBirth,
      enrollmentDate: body.enrollmentDate,
      batchId: body.batchId,
      campusId: body.campusId,
      parentId: body.parentId,
      classId: body.classId,
      st_id: verified.st_id,
      id: verified.id,
    };

    const id = verified;
    const student = await userModel.resetPassword(payload);
    return studentModel.updateStudent(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};
