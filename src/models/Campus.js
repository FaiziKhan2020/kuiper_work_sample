import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createCampus = async (payload) => {
  return await prisma.campus.create({
    data: {
      campus_name: payload.campusName,
      campus_imgurl: payload.profileImage,
      campus_phone: payload.phone,
      campus_code: payload.code,
      company_id: payload.companyId,
      location: payload.location,
      is_active: true,
    },
  });
};

export const getAllCampuses = async (companyId) => {
  return prisma.campus.findMany({
    include: {
      Company: true,
    },
  });
};

export const getCampusById = async (payload) => {
  return await prisma.campus.findUnique({
    where: { id: payload.id },
    include: {
      Company: true,
    },
  });
};

export const updateCampus = async (payload) => {
  return await prisma.campus.update({
    where: {
      id: payload.id,
    },

    data: {
      campus_name: payload.campusName,
      campus_imgurl: payload.profileImage,
      campus_phone: payload.phone,
      location: payload.location,

      updated_at: getCurrentTimestamp(),
    },
  });
};
// update campus by companyID
export const updateCampusByCompanyID = async (payload) => {
  return await prisma.campus.updateMany({
    where: {
      company_id: payload.companyId,
    },

    data: {
      campus_name: payload.campusName,
      campus_imgurl: payload.profileImage,
      campus_phone: payload.phone,
      location: payload.location,
      updated_at: getCurrentTimestamp(),
    },
  });
};

export const deleteCampus = async (payload) => {
  return await prisma.campus.update({
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

export const createDefaultCampus = async (payload) => {
  console.log(payload);
  return await prisma.campus.create({
    data: {
      campus_name: " ",
      campus_imgurl: " ",
      campus_phone: " ",
      campus_code: " ",
      company_id: payload.companyId,
      location: "",
      is_active: true,
    },
  });
};
