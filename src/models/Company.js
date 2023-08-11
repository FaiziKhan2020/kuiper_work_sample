import prisma from "../shared/prisma/client";
import {
  getCurrentTimestamp,
  getTrialTimestamp,
} from "../shared/functions/date";

export const createCompany = async (payload) => {
  return await prisma.company.create({
    data: {
      address: payload.address,
      city: payload.city,
      country: payload.country,
      name: payload.name,
      owner_id: payload.userId,
      plan: payload.plan,
      primary_contact: payload.contact,
      billing_expired: payload.billingExpired,
    },
  });
};

export const createDefaultCompany = async () => {
  return await prisma.company.create({
    data: {
      address: "",
      city: "",
      country: "",
      name: "default",
      plan: "TRIAL",
      primary_contact: "",
      billing_expired: getTrialTimestamp(),
    },
  });
};

export const updateCompany = async (payload) => {
  console.log(payload);
  return await prisma.company.update({
    data: {
      address: payload.address,
      city: payload.city,
      country: payload.country,
      name: payload.name,
      owner_id: payload.userId,
      plan: payload.plan ?? "TRIAL",
      primary_contact: payload.contact,
      logoUrl: payload.logo,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.companyId,
    },
  });
};

export const getCompany = async (companyId) => {
  return await prisma.company.findFirst({
    where: { id: companyId, name: { not: "default" } },
  });
};

export const updateCompanySubdomain = async (companyId, subdomain) => {
  return await prisma.company.update({
    data: {
      subdomain,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: companyId,
    },
  });
};

export const getCompanyBySubdomain = async (subdomain) => {
  return await prisma.company.findFirst({
    where: {
      subdomain,
    },
  });
};

export const suspendCompany = async (id) => {
  return await prisma.company.update({
    data: {
      is_deleted: true,
      deleted_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
    },
  });
};
