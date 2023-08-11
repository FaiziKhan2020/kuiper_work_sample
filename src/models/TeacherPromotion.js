import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create TeacherPromotion
export const createTeacherPromotion = async (payload) => {
  return await prisma.teacherPromotion.create({
    data: {
      position_from: payload.positionFrom,
      position_to: payload.positionTo,
      reason: payload.reason,
      promotion_date: payload.promotionDate,
      company_id: payload.companyId,
      teacher_id: payload.teacherId,
    },
  });
};

// Update TeacherPromotion
export const updateTeacherPromotion = async (payload) => {
  return await prisma.teacherPromotion.update({
    where: {
      id: payload.id,
    },
    data: {
      position_from: payload.positionFrom,
      position_to: payload.positionTo,
      reason: payload.reason,
      promotion_date: payload.promotionDate,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteByID = async (id) => {
  return await prisma.teacherPromotion.update({
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

// Get all
export const getAllTeacherPromotions = async (companyId) => {
  return await prisma.teacherPromotion.findMany({
    include: {
      Teacher: true,
    },
    where: {
      company_id: companyId,
    },
  });
};

// Find unique
export const findUniqueTeacherPromotion = async (id) => {
  return await prisma.teacherPromotion.findUnique({
    where: { id },
    include: {
      Teacher: true,
    },
  });
};
