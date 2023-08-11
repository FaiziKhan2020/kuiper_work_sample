import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

//Create new Notice
export const createNotice = async (payload) => {
  return await prisma.notice.create({
    data: {
      notice_type: payload.type,
      description: payload.description,
      created_by_id: payload.createdBy,
      created_at: getCurrentTimestamp(),
      company_id: payload.companyId,
    },
  });
};

//Get Notice by Id
export const getNoticeById = async (id) => {
  return await prisma.notice.findUnique(id);
};

//Get All Notices
export const getAllNotices = async (companyId) => {
  return await prisma.notice.findMany({ where: { company_id: companyId } });
};

//Update Notice
export const updateNotice = async (payload) => {
  return await prisma.notice.update({
    data: {
      notice_type: payload.type,
      description: payload.description,
      updated_by_id: payload.createdBy,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

//Soft Delete Notice
export const DeleteNotice = async (id) => {
  return await prisma.notice.update({
    where: {
      id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
    },
  });
};
