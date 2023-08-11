import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createUser = async (payload) => {
  return await prisma.user.create({
    data: {
      email: payload.email,
      first_name: payload.firstName || " ",
      last_name: payload.lastName || " ",
      password: payload.password || " ",
      active: false,
      onboarded: payload.onboarded || false,
      company_id: payload.companyId,
    },
  });
};

export const verifyUser = async (payload) => {
  return await prisma.user.update({
    where: {
      id: payload.id,
    },
    data: {
      active: true,
    },
  });
};

export const getUser = async (payload) => {
  return await prisma.user.findMany({
    where: { id: payload.id },
  });
};

export const getUserByEmail = async (email) => {
  return await prisma.user.findFirst({ where: { email } });
};

export const getAllUserOfCompany = async (companyId) => {
  return await prisma.user.findMany({
    where: {
      company_id: companyId,
    },
    include: {
      Billing: true,
      Employee: true,
      Notification: true,
      Role: true,
      Log: true,
      Parent: true,
    },
  });
};
export const resetPassword = async (payload) => {
  return await prisma.user.update({
    where: {
      id: payload.id,
    },
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      active: true,
      password: payload.password,
    },
  });
};
