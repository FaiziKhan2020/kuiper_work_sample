import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create a Class
export const createClass = async (payload) => {
  return await prisma.class.create({
    data: {
      name: payload.className,
      location: payload.classLocation,
      campus_id: payload.campusId,
    },
  });
};

// Get All Classes
export const getAllClasses = async (payload) => {
  return await prisma.class.findMany({
    where: { campus_id: payload.campusId },
    include: {
      Campus: true,
    },
  });
};

// Get Class By Id
export const getClassById = async (payload) => {
  return await prisma.class.findUnique({ where: { id: payload.id } });
};

// Update Class
export const updateClass = async (payload) => {
  return await prisma.class.update({
    where: {
      id: payload.id,
    },
    data: {
      name: payload.className,
      location: payload.classLocation,
      campus_id: payload.campusId,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete Class
export const deleteClass = async (payload) => {
  return await prisma.class.update({
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
