import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create Teacher
export const createTeacher = async (payload) => {
  return await prisma.teacher.create({
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      gender: payload.gender,
      caste: payload.caste,
      religion: payload.religion,
      contact: payload.contact,
      address: payload.address,
      current_position: payload.currentPosition,
      class_id: payload.classId,
      employee_id: payload.employeeId,
      company_id: payload.companyId,
      hiring_date: payload.hiringDate,
      profile_picture: payload.profile,
    },
  });
};

// Update Teacher
export const updateTeacher = async (payload) => {
  return await prisma.teacher.update({
    where: {
      id: payload.tech_id,
    },
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      gender: payload.gender,
      caste: payload.caste,
      religion: payload.religion,
      contact: payload.contact || payload.phone,
      address: payload.address,
      current_position: payload.currentPosition || payload.job_title,
      class_id: payload.classId,
      employee_id: payload.employeeId,
      hiring_date: payload.hiringDate,
      profile_picture: payload.profile,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteByID = async (payload) => {
  return await prisma.teacher.update({
    where: {
      id: payload.tech_id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
  });
};

// Get all teacher
export const getAllTeachersOfCompany = async (companyId) => {
  return await prisma.teacher.findMany({
    include: {
      TeacherCampus: true,
      Class: true,
      Employee: true,
      TeacherSubject: true,
    },
  });
};

// Find unique teacher
export const findUniqueTeacher = async (payload) => {
  return await prisma.teacher.findMany({
    where: { id: payload.tech_id },
    include: {
      TeacherCampus: true,
      Class: true,
      Assignment: true,
      Employee: true,
    },
  });
};

// default teacher
export const defaulTeacher = async (payload) => {
    return await prisma.teacher.create({
    data: {
      first_name: " ",
      last_name: " ",
      gender: " ",
      caste: " ",
      religion: " ",
      contact: " ",
      address: " ",
      current_position: " ",
      class_id: "default",
      profile_picture: " ",
      hiring_date: getCurrentTimestamp(),
      employee_id: payload.employeeId,
      company_id: payload.companyId,
    },
  });
};
