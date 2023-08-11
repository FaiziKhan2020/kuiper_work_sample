import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import randtoken from "rand-token";
import * as JwtToken from "../shared/config/config";
import * as employeeModel from "../models/employee";
import * as jobs from "../jobs/emails/employee-invite-email";
import * as userModel from "../models/User";
import * as roleModel from "../models/role";
import * as authService from "../services/auth.service";
import { Roles } from "@prisma/client";

export const createEmployee = async (body) => {
  try {
    // const employee = await authService.updatePassword();
    return await employeeModel.createEmployee(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateEmployee = async (data) => {
  try {
    const { body, params } = data;
    const payload = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      bloodGroup: body.bloodGroup,
      gender: body.gender,
      emergencyContactName: body.emergencyContactName,
      emergencyContactNumber: body.emergencyContactNumber,
      employeeAssignedId: body.employeeAssignedId,
      education: body.education,
      job_title: body.jobTitle,
      religion: body.religion,
      contact: body.contact,
      address: body.address,
      campusId: body.campusId,
      companyId: body.companyId,
      emp_id: params.id,
    };
    return await employeeModel.updateEmployee(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const getAllEmployee = async (body) => {
  try {
    return await employeeModel.getAllEmployee(body);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const getEmployeeById = async (payload) => {
  try {
    return await employeeModel.getuniqueEmployee(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

export const deleteById = async (payload) => {
  try {
    return await employeeModel.deleteById(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

// send invite
export const registerEmployee = async (body) => {
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
    const payload = {
      userId: user.id,
      companyId: body.companyId,
      role: Roles.EMPLOYEE,
    };
    await roleModel.createRole(payload);
    const token = jwt.sign(
      { id: user.id, emp_id: employee.id },
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
export const activeEmployee = async (data) => {
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
      caste: body.caste,
      emergencyContactName: body.emergencyContactName,
      emergencyContactNumber: body.emergencyContactNumber,
      employeeAssignedId: body.employeeAssignedId,
      education: body.education,
      job_title: body.jobTitle,
      religion: body.religion,
      contact: body.contact,
      address: body.address,
      campusId: body.campusId,
      companyId: body.companyId,
      userId: body.userId,
      emp_id: verified.emp_id,
      id: verified.id,
    };

    await userModel.resetPassword(payload);
    return await employeeModel.updateEmployee(payload);
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};
