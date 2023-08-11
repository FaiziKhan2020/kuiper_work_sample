import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import * as JwtToken from "../shared/config/config";
import * as teacherModel from "../models/Teacher.js";
import * as userModel from "../models/User";
import * as employeeModel from "../models/employee";
import * as jobs from "../jobs/emails/teacher-invite-email";
import * as roleModel from "../models/Role";
import { teacherTransformer } from "./transformers/teacher.transformer.js";
import { Roles } from "@prisma/client";

export const createTeacher = async (body) => {
  try {
    return await teacherModel.createTeacher(body);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const updateTeacher = async (data) => {
  try {
    const { body, params } = data;
    const payload = {
      firstName: body.firstName,
      lastName: body.lastName,
      gender: body.gender,
      caste: body.caste,
      religion: body.religion,
      contact: body.contact,
      address: body.address,
      currentPosition: body.currentPosition,
      classId: body.classId,
      employeeId: body.employeeId,
      hiringDate: body.hiringDate,
      profile: body.profile,
      tech_id: params.id,
    };
    return await teacherModel.updateTeacher(payload);
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
};

export const getAllTeacher = async (body) => {
  try {
    const teacher = await teacherModel.getAllTeachersOfCompany(body);
    return teacherTransformer(teacher);
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
};

export const getByID = async (payload) => {
  try {
    const teacher = await teacherModel.findUniqueTeacher(payload);
    return teacherTransformer(teacher);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const deleteTeacher = async (payload) => {
  try {
    return await teacherModel.deleteByID(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

// send invite
export const registerTeacher = async (body) => {
  try {
    const isUserExist = await userModel.getUserByEmail(body.email);
    if (isUserExist) {
      return {
        message: "Signup failed, User already exist",
        statusCode: 409,
      };
    }
    body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());
    const user = await userModel.createUser(body);
    body.userId = user.id;
    const employee = await employeeModel.defaultEmplloyee(body);
    body.employeeId = employee.id;

    const payload = {
      userId: user.id,
      companyId: body.companyId,
      role: Roles.TEACHER,
    };
    console.log(body.employeeId);
    await roleModel.createRole(payload);
    const teacher = await teacherModel.defaulTeacher(body);
    const token = jwt.sign(
      { id: user.id, emp_id: employee.id, tech_id: teacher.id },
      JwtToken.getTokenSecret(),
      {
        expiresIn: "7d",
      }
    );
    console.log(token);
    jobs.invite(body.email, token);
    return {
      message: "Account created successfully!",
      statusCode: 200,
      data: employee,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

// Active Employee Account
export const activeTeacher = async (data) => {
  try {
    const verified = jwt.verify(data.header, JwtToken.getTokenSecret());

    const { body } = data;
    body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());
    const payload = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      phone: body.phone,
      bloodGroup: body.bloodGroup,
      gender: body.gender,
      emergencyContactName: body.emergencyContactName,
      emergencyContactNumber: body.emergencyContactNumber,
      employeeAssignedId: body.employeeAssignedId,
      education: body.education,
      job_title: body.jobTitle,
      religion: body.religion,
      address: body.address,
      caste: body.caste,
      currentPosition: body.currentPosition,
      hiringDate: body.hiringDate,
      profile: body.profile,
      classId: body.classId,
      campusId: body.campusId,
      companyId: body.companyId,
      userId: body.userId,
      emp_id: verified.emp_id,
      id: verified.id,
      tech_id: verified.tech_id,
    };
    await teacherModel.updateTeacher(payload);
    await userModel.resetPassword(payload);
    return employeeModel.updateEmployee(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};
