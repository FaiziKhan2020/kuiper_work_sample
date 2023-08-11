import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createEmailLogs = async (payload) => {
  return await prisma.emailLog.create({
    data: {
      email_type: payload.type,
      payload: payload.debugPayload,
      sent_date: getCurrentTimestamp(),
      status: payload.status,
      to_email: payload.toEmail,
      company_id: payload.companyId,
    },
  });
};

export const updateEmailLogs = async (payload) => {
  return await prisma.emailLog.update({
    data: {
      email_type: payload.type,
      status: payload.status,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
