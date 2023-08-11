import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createOrUpdateRole = async (payload) => {
  const isRoleExist = await prisma.role.findFirst({
    where: {
      user_id: payload.userId,
      company_id: payload.companyId,
    },
  });

  return await prisma.role.upsert({
    update: {
      role: payload.role,
      updated_at: getCurrentTimestamp(),
    },
    create: {
      role: payload.role,
      company_id: payload.companyId,
      user_id: payload.userId,
    },
    where: {
      id: isRoleExist ? isRoleExist.id : null,
    },
  });
};

export const deleteRole = async (payload) => {
  const isRoleExist = await prisma.role.findFirst({
    where: {
      user_id: payload.userId,
      company_id: payload.companyId,
    },
  });
  if (isRoleExist)
    return await prisma.role.update({
      data: {
        is_deleted: true,
        updated_at: getCurrentTimestamp(),
        deleted_at: getCurrentTimestamp(),
      },
      where: {
        id: isRoleExist.id,
      },
    });
  return null;
};

export const getUserRole = async (userId, companyId) => {
  return await prisma.role.findFirst({
    where: {
      user_id: userId,
      company_id: companyId,
    },
  });
};

export const createRole = async (payload) => {
  return await prisma.role.create({
    data: {
      user_id: payload.userId,
      company_id: payload.companyId,
      role: payload.role,
    },
  });
};
