import prisma from "../shared/prisma/client";

export const createLog = async (payload) => {
  return await prisma.log.create({
    data: {
      activity: payload.activity,
      effect: payload.effect,
      entity_type: payload.entity,
      company_id: payload.companyId,
      user_id: payload.userId,
    },
  });
};

export const getAllUserLogs = async (userId, companyId) => {
  return await prisma.log.findMany({
    where: {
      user_id: userId,
      company_id: companyId,
    },
  });
};
