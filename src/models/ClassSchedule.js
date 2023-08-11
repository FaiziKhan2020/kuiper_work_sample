import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create a classSchedule
export const createClassSchedule = async (payload) => {
  return await prisma.classSchedule.create({
    data: {
      date: payload.date,
      time: payload.time,
      class_id: payload.class_id,
      subject_id: payload.subject_id,
    },
  });
};

// Get All Class Schedules
export const getAllClassSchedule = async (classId) => {
  return await prisma.classSchedule.findMany({ where: { class_id: classId } });
};

// Get classSchedule By Id
export const getClassScheduleById = async (id) => {
  return await prisma.classSchedule.findUnique({ where: { id } });
};

// Update classSchedule
export const updateClassSchedule = async (payload) => {
  return await prisma.classSchedule.update({
    data: {
      date: payload.date,
      time: payload.time,
      class_id: payload.class_id,
      subject_id: payload.subject_id,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

// Soft Delete classSchedule
export const deleteClassSchedule = async (payload) => {
  return await prisma.classSchedule.update({
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
