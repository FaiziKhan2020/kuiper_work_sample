import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create Student
export const createStudent = async (payload) => {
  return await prisma.student.create({
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      gender: payload.gender,
      religion: payload.religion,
      contact: payload.contact,
      address: payload.address,
      section: payload.section,
      roll_number: payload.rollNumber,
      profile_picture: payload.profilePicture,
      date_of_birth: payload.dateOfBirth,
      enrollment_date: payload.enrollmentDate,
      batch_id: payload.batchId,
      campus_id: payload.campusId,
      parent_id: payload.parentId,
      class_id: payload.classId,
    },
  });
};

// Update Student
export const updateStudent = async (payload) => {
  return await prisma.student.update({
    where: {
      id: payload.st_id,
    },
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      gender: payload.gender,
      religion: payload.religion,
      father_name: payload.fatherName,
      contact: payload.contact,
      address: payload.address,
      section: payload.section,
      roll_number: payload.rollNumber,
      profile_picture: payload.profilePicture,
      date_of_birth: payload.dateOfBirth,
      enrollment_date: payload.enrollmentDate,
      batch_id: payload.batchId,
      campus_id: payload.campusId,
      parent_id: payload.parentId,
      class_id: payload.classId,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// soft Delete
export const deleteById = async (payload) => {
  return await prisma.student.update({
    where: {
      id: payload.id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
  });
};

// Get all Student
export const getAllStudentOfCampus = async (payload) => {
  return await prisma.student.findMany({
    include: {
      Campus: true,
      Batch: true,
      Parent: true,
      Class: true,
    },
  });
};

// Find unique Student
export const getStudentById = async (payload) => {
  return await prisma.student.findMany({
    where: { id: payload.id },
    include: {
      Batch: true,
      Campus: true,
      Parent: true,
      Class: true,
    },
  });
};

export const registerStudent = async () => {
  return await prisma.student.create({});
};

// default Student

export const defaultStudent = async (payload) => {
  return await prisma.student.create({
    data: {
      first_name: "",
      last_name: "",
      gender: "",
      religion: "",
      contact: "",
      address: "",
      section: "",
      roll_number: "",
      profile_picture: "",
      date_of_birth: getCurrentTimestamp(),
      enrollment_date: getCurrentTimestamp(),
      batch_id: payload.batchId,
      campus_id: payload.campusId,
      parent_id: payload.parentId,
      class_id: payload.classId,
    },
  });
};
