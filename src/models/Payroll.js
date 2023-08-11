import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createPayroll = async (payload) => {
  const payroll = await prisma.payroll.create({
    data: {
      currency_code: payload.currency,
      payroll_date: payload.payrollDate,
      status: payload.status,
      title: payload.title,
      total: payload.total,
      campus_id: payroll.campusId,
      employee_id: payload.employeeId,
      invoice_number: payload.invoiceNumber,
    },
  });
  if (!payroll) throw new Error("Error while creating payroll");

  for (const item of payload.items) {
    await prisma.payrollItems.create({
      data: {
        title: item.title,
        amount: item.amount,
        payroll_id: payroll.id,
        currency_symbol: item.currency,
        deduction: item.deduction,
        reason: item.reason,
        tax_amount: item.taxAmount,
        tax_type: item.taxType,
      },
    });
  }
};

export const updatePayroll = async (payload) => {
  const payroll = await prisma.payroll.findUnique(payload.id);
  if (!payload)
    throw new Error("Payroll not found, unable to update the payroll");
  await prisma.payroll.update({
    data: {
      currency_code: payload.currency,
      payroll_date: payload.payrollDate,
      status: payload.status,
      title: payload.title,
      total: payload.total,
      campus_id: payroll.campusId,
      employee_id: payload.employeeId,
      invoice_number: payload.invoiceNumber,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });

  for (const item of payload.items) {
    await prisma.payrollItems.update({
      data: {
        title: item.title,
        amount: item.amount,
        payroll_id: payroll.id,
        currency_symbol: item.currency,
        deduction: item.deduction,
        reason: item.reason,
        tax_amount: item.taxAmount,
        tax_type: item.taxType,
        updated_at: getCurrentTimestamp(),
      },
    });
  }
};

export const deletePayroll = async (payload) => {
  return await prisma.payroll.update({
    data: {
      is_deleted: true,
    },
    where: {
      id: payload.id,
    },
  });
};

export const getPayrollsByEmployee = async (employeeId) => {
  return await prisma.payroll.findMany({
    where: {
      employee_id: employeeId,
    },
    include: { PayrollItems: true },
  });
};

export const getPayrollsByCampus = async (campusId) => {
  return await prisma.payroll.findMany({
    where: {
      campus_id: campusId,
    },
    include: { PayrollItems: true, Employee: true },
  });
};

export const getAllPayrolls = async (campusIds) => {
  return await prisma.payroll.findMany({
    where: {
      campus_id: {
        in: campusIds,
      },
    },
    include: { PayrollItems: true, Employee: true },
  });
};
