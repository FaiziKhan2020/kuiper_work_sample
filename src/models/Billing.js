import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createBilling = async (payload) => {
  return await prisma.billing.create({
    data: {
      auto_renewal_token: payload.token,
      billing_expire: payload.billingExpire,
      last_payment_status: payload.status,
      company_id: payload.companyId,
      students_limit: payload.limit,
      user_id: payload.userId,
    },
  });
};

export const updateBilling = async (payload) => {
  return await prisma.billing.update({
    data: {
      auto_renewal_token: payload.token,
      billing_expire: payload.billingExpire,
      last_payment_status: payload.status,
      company_id: payload.companyId,
      students_limit: payload.limit,
      user_id: payload.userId,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

export const deleteBilling = async (payload) => {
  return await prisma.billing.update({
    data: {
      auto_renewal_token: payload.token,
      billing_expire: payload.billingExpire,
      last_payment_status: payload.status,
      company_id: payload.companyId,
      students_limit: payload.limit,
      user_id: payload.userId,
      updated_at: getCurrentTimestamp(),
      is_deleted: true,
      deleted_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

export const getBillingInformationByCompany = async (companyId) => {
  return await prisma.billing.findFirst({
    where: { company_id: companyId },
    include: { User: true, Invoice: true },
  });
};
