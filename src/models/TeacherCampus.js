import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create TeacherCampus
export const createTeacherCampus = async (payload) => {
  return await prisma.teacherCampus.create({
    data: {
      campus_id: payload.campusId,
      start_time: payload.startTime,
      end_time: payload.endTime,
      teacher_id: payload.teacherId,
    },
  });
};

// Update TeacherCampus
export const updateTeacherCampus = async (payload) => {
  return await prisma.teacherCampus.update({
    where: {
      id: payload.id,
    },
    data: {
      start_time: payload.startTime,
      end_time: payload.endTime,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteByID = async (id) => {
  return await prisma.teacherCampus.update({
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

// Get all TeacherCampus
export const getAllTeacherCampuses = async (campusId) => {
  return await prisma.teacherCampus.findMany({
    include: {
      Teacher: true,
    },
    where: {
      campus_id: campusId,
    },
  });
};

// Find unique teacherCampus
export const findUniqueTeacherCampus = async (id) => {
  return await prisma.teacherCampus.findUnique({
    where: { id },
    include: {
      Teacher: true,
      Campus: true,
    },
  });
};
