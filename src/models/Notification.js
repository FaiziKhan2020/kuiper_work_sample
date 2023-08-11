import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// create notification
export const createNotification = async (payload) => {
  return await prisma.notification.create({
    data: {
      message: payload.message,
      from_id: payload.fromId,
      type: payload.type,
      priority: payload.priority,
      company_id: payload.companyId,
      user_id: payload.userId,
    },
  });
};

// update notification
export const updateNotification = async (payload) => {
  return await prisma.notification.update({
    where: {
      id: payload.id,
    },
    data: {
      message: payload.message,
      from_id: payload.fromId,
      type: payload.type,
      priority: payload.priority,
      updated_at: getCurrentTimestamp(),
      seen: seen,
    },
  });
};

// soft Delete
export const deleteById = async (payload) => {
  return await prisma.notification.update({
    where: {
      id: payload.id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
  });
};

// Get all notification for user
export const getAllNotificationByUser = async (userId) => {
  return await prisma.notification.findMany({ where: { user_id: userId } });
};

// Get all notification for company
export const getAllNotificationByCompany = async (companyId) => {
  return await prisma.notification.findMany({
    where: { company_id: companyId },
  });
};

// Find unique notification
export const findUniqueNotification = async (id) => {
  return await prisma.notification.findUnique(id);
};
