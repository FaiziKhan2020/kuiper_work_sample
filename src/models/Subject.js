import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create subject
export const createSubject = async (payload) => {
  return await prisma.subject.create({
    data: {
      subject_name: payload.subjectName,
      company_id: payload.companyId,
    },
  });
};

// Update subject
export const updateSubject = async (payload) => {
  return await prisma.subject.update({
    where: {
      id: payload.id,
    },
    data: {
      subject_name: payload.subjectName,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteByID = async (payload) => {
  return await prisma.subject.update({
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

// Get all Subject
export const getAllSubjects = async (payload) => {
  return await prisma.subject.findMany({
    include: {
      Company: true,
    },
  });
};

// Find unique subject
export const findUniqueSubject = async (payload) => {
  return await prisma.subject.findMany({
    where: {
      id: payload.id,
    },
    include: {
      Company: true,
    },
  });
};
