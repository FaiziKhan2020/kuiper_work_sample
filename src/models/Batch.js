import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create Batch
export const createBatch = async (payload) => {

  return await prisma.batch.create({
    data: {
      batch_name: payload.batchName,
      start_date: payload.startDate,
      end_date: payload.endDate,
      campus_id: payload.campusId,
      company_id: payload.companyId,
    },
  });
};

// Update Batch
export const updateBatch = async (payload) => {
  return await prisma.batch.update({
    where: {
      id: payload.id,
    },
    data: {
      batch_name: payload.batchName,
      start_date: payload.startDate,
      end_date: payload.endDate,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteBatch = async (payload) => {
  return await prisma.batch.update({
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

// Get all batch
export const getAll = async (payload) => {
  return await prisma.batch.findMany();
};

// Find unique Batch
export const findUniqueBatch = async (payload) => {
  return await prisma.batch.findUnique({ where: { id: payload.id } });
};
