import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createTransaction = async (payload) => {
  return await prisma.transaction.create({
    data: {
      created_by_id: payload.createdBy,
      entity_id: payload.entityId,
      entity_name: payload.entityName,
      entity_value: payload.entityValue,
      title: payload.title,
      description: payload.description,
      company_id: payload.companyId,
    },
  });
};

export const updateTransaction = async (payload) => {
  return await prisma.transaction.update({
    data: {
      entity_id: payload.entityId,
      entity_name: payload.entityName,
      entity_value: payload.entityValue,
      title: payload.title,
      description: payload.description,
      updated_at: getCurrentTimestamp(),
      updated_by_id: payload.updatedById,
    },
    where: {
      id: payload.id,
    },
  });
};

export const deleteTransaction = async (payload) => {
  return await prisma.transaction.update({
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
      updated_by_id: payload.updatedById,
    },
    where: {
      id: payload.id,
    },
  });
};

export const findAllTransactions = async (payload) => {
  return await prisma.transaction.findMany({
    where: {
      company_id: payload.companyId,
    },
  });
};

export const findTransactionById = async (payload) => {
  return await prisma.transaction.findMany({
    where: {
      entity_id: payload.id,
      entity_name: payload.entityName,
    },
  });
};
