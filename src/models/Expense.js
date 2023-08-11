import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Creates a Expense
export const createExpense = async (payload) => {
  return await prisma.expense.create({
    data: {
      reason: payload.expenseReason,
      amount: payload.expenseAmount,
      created_by_id: payload.createdBy,
      company_id: payload.companyId,
    },
  });
};

//Get Expense by Id
export const getExpenseById = async (id) => {
  return await prisma.expense.findUnique({
    where: {
      id,
    },
  });
};

//Get All Expenses
export const getAllExpenses = async (companyId) => {
  return await prisma.expense.findMany({ where: { company_id: companyId } });
};

//Update Expense
export const updateExpense = async (payload) => {
  return await prisma.expense.update({
    data: {
      reason: payload.expenseReason,
      amount: payload.expenseAmount,
      updated_by_id: payload.updatedBy,
      updated_at: getCurrentTimestamp(),
      company_id: payload.companyId,
    },
    where: {
      id: payload.id,
    },
  });
};

//Soft Delete Expense
export const DeleteExpense = async (id) => {
  return await prisma.expense.update({
    where: {
      id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
    },
  });
};
