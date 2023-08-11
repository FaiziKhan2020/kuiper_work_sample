import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createDepartment = async (payload) => {
  return await prisma.department.create({
    data: {
      name: payload.name,
      location: payload.location,
      campus_id: payload.campusId,
      description: payload.description,
      head_of_department: payload.headOfDepartment,
      banner_image: payload.bannerImage,
    },
  });
};

export const updateDepartment = async (payload) => {
  return await prisma.department.update({
    data: {
      name: payload.name,
      location: payload.location,
      campus_id: payload.campusId,
      description: payload.description,
      head_of_department: payload.headOfDepartment,
      banner_image: payload.bannerImage,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

export const getAllDepartmentsOfCompany = async (payload) => {
  return await prisma.department.findMany({
    where: {
      campus_id: {
        in: payload.campusIds,
      },
    },
  });
};

export const getAllDepartmentsOfCampus = async (payload) => {
  return await prisma.department.findMany({
    where: {
      campus_id: payload.campusId,
    },
  });
};

export const deleteDepartment = async (payload) => {
  return await prisma.department.update({
    data: {
      is_deleted: true,
      deleted_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
