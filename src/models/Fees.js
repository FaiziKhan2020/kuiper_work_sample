import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Creates a Fees
export const createFees = async (payload) => {
  return await prisma.fees.create({
    data: {
      amount: payload.amount,
      student_id: payload.studentId,
      due_date: payload.dueDate,
      is_paid: payload.isPaid,
      company_id: payload.companyId,
    },
  });
};

//Get Fees by Id
export const getFeeById = async (id) => {
  return await prisma.fees.findUnique({
    where: {
      id,
    },
  });
};

//Get All Fees
export const getAllFeesOfStudent = async (studentId) => {
  return await prisma.fees.findMany({ where: { student_id: studentId } });
};

//Update Fees
export const updateFees = async (payload) => {
  return await prisma.fees.update({
    data: {
      amount: payload.amount,
      student_id: payload.student_id,
      due_date: payload.due_date,
      is_paid: payload.is_paid,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
