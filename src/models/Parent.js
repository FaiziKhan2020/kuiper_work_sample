import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create Parents
export const createParents = async (payload) => {
  return await prisma.parent.create({
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      contact: payload.contact,
      email: payload.email,
      profile_picture: payload.profilePicture,
      is_guardian: payload.isGuardian,
      address: payload.address,
      company_id: payload.companyId,
      user_id: payload.userId,
    },
  });
};

// Update parents
export const updateParents = async (payload) => {
  return await prisma.parent.update({
    where: {
      id: payload.id,
    },
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      contact: payload.contact,
      email: payload.email,
      profile_picture: payload.profilePicture,
      is_guardian: payload.isGuardian,
      updated_at: getCurrentTimestamp(),
      address: payload.address,
    },
  });
};

// soft Delete
export const deleteById = async (payload) => {
  return await prisma.parent.update({
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

// Get all parents
export const getAllParentsByCompany = async (companyId) => {
  return await prisma.parent.findMany({ where: { company_id: companyId } });
};

// Find unique parents
export const findUniqueParents = async (id) => {
  return await prisma.parents.findUnique(id);
};
