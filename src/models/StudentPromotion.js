import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create StudentPromotion
export const createStudentPromotion = async (payload) => {
  return await prisma.studentPromotion.create({
    data: {
      class_from: payload.classFrom,
      class_to: payload.classTo,
      remarks: payload.remarks,
      company_id: payload.companyId,
      student_id: payload.studentId,
    },
  });
};

// Update StudentPromotion
export const updateStudentPromotion = async (payload) => {
  return await prisma.studentPromotion.update({
    where: {
      id: payload.id,
    },
    data: {
      class_from: payload.classFrom,
      class_to: payload.classTo,
      remarks: payload.remarks,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteByID = async (id) => {
  return await prisma.studentPromotion.update({
    where: {
      id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
  });
};

// Get all
export const getAllPromotions = async (companyId) => {
  return await prisma.studentPromotion.findMany({
    include: {
      Student: true,
    },
    where: {
      company_id: companyId,
    },
  });
};

// Get all
export const getAllPromotionOfStudent = async (studentId) => {
  return await prisma.studentPromotion.findMany({
    include: {
      Company: true,
    },
    where: {
      student_id: studentId,
    },
  });
};

// Find unique
export const findUniqueStudentPromotion = async (id) => {
  return await prisma.studentPromotion.findUnique({
    where: { id },
    include: {
      Student: true,
    },
  });
};
