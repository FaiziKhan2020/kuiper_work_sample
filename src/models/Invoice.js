import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createInvoice = async (payload) => {
  return await prisma.invoice.create({
    data: {
      due_date: payload.dueDate,
      invoice_number: payload.invoiceNumber,
      payment_mode: payload.mode,
      payment_vendor: payload.vendor,
      reason: payload.reason,
      status: payload.status,
      title: payload.title,
      billing_id: payload.billingId,
      unique_token: payload.token ?? null,
    },
  });
};

export const updateInvoice = async (payload) => {
  return await prisma.invoice.update({
    data: {
      due_date: payload.dueDate,
      invoice_number: payload.invoiceNumber,
      payment_mode: payload.mode,
      payment_vendor: payload.vendor,
      reason: payload.reason,
      status: payload.status,
      title: payload.title,
      billing_id: payload.billingId,
      unique_token: payload.token ?? null,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

export const payInvoice = async (payload) => {
  return await prisma.invoice.update({
    data: {
      status: payload.status,
      payment_date: payload.paymentDate,
      payment_mode: payload.mode,
      payment_vendor: payload.vendor,
      reason: payload.reason,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
