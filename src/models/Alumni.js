import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create Alumni
export const createAlumni = async (payload) => {
  return await prisma.alumni.create({
    data: {
      student_id: payload.studentId,
      graduation_date: payload.graduationDate,
      is_employed: payload.isEmployed,
      campus_id: payload.campusId,
      company_id: payload.companyId,
    },
  });
};

// Get Alumni By Id
export const getAllAlumni = async (companyId) => {
  return await prisma.alumni.findMany({ where: { company_id: companyId } });
};

// Update Alumni
export const updateAlumni = async (payload) => {
  return await prisma.alumni.update({
    where: {
      id: payload.id,
    },
    data: {
      student_id: payload.studentId,
      graduation_date: payload.graduationDate,
      is_employed: payload.isEmployed,
      campus_id: payload.campusId,
      company_id: payload.companyId,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete Alumni
export const deleteAlumni = async (payload) => {
  return await prisma.alumni.update({
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
