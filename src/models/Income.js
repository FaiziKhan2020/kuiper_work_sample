import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

//Create an Income
export const createIncome = async (payload) => {
  return await prisma.income.create({
    data: {
      reason: payload.reason,
      amount: payload.amount,
      created_by_id: payload.createdById,
      updated_by_id: payload.updatedById,
    },
  });
};

// Get All Income
export const getAllIncome = async (companyId) => {
  return await prisma.income.findMany({
    Include: {
      Company: true,
      Campus: true,
    },
  });
};

//Update an Income
export const updateIncome = async (payload) => {
  return await prisma.income.update({
    data: {
      reason: payload.reason,
      amount: payload.amount,
      created_by_id: payload.createdById,
      updated_by_id: payload.updatedById,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

// Soft Delete An Income
export const deleteIncome = async (payload) => {
  return await prisma.Income.update({
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
