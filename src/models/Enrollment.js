import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Creates an Enrollment
export const createEnrollment = async (payload) => {
  return await prisma.enrollment.create({
    data: {
      enrollment_number: payload.enrollmentNumber,
      student_id: payload.studentId,
      subject_id: payload.subjectId,
      created_by_id: payload.createdBy,
      is_active: true,
      created_at: getCurrentTimestamp(),
      company_id: payload.companyId,
    },
  });
};

//Get Enrollment by Id
export const getEnrollmentById = async (id) => {
  return await prisma.enrollment.findUnique({
    where: {
      id,
    },
  });
};

//Get Enrollment by Student Id
export const getEnrollmentByStudentId = async (studentId) => {
  return await prisma.enrollment.findFirst({
    where: {
      student_id: studentId,
    },
  });
};

//Get All Enrollment
export const getAllEnrollment = async (companyId) => {
  return await prisma.enrollment.findMany({ where: { company_id: companyId } });
};

//Update Enrollment
export const updateEnrollment = async (payload) => {
  return await prisma.enrollment.update({
    data: {
      enrollment_number: payload.enrollment_number,
      student_id: payload.student_id,
      subject_id: payload.subject_id,
      created_by_id: payload.created_by,
      is_active: payload.is_active,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

//Soft Delete Enrollment
export const DeleteEnrollment = async (payload) => {
  return await prisma.enrollment.update({
    where: {
      id: payload.id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      delted_at: getCurrentTimestamp(),
    },
  });
};
