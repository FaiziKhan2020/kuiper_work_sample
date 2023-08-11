import * as batchService from "../../services/batch.service.js";

export const createBatch = async (req, res) => {
  return await batchService.createBatch(req, res);
};

export const updateBatch = async (req, res) => {
  return await batchService.updateBatch(req, res);
};

export const deleteBatch = async (req, res) => {
  return await batchService.deleteByID(req, res);
};

export const getAllBatch = async (req, res) => {
  return await batchService.getAll(req, res);
};

export const getBatchById = async (req, res) => {
  return await batchService.getById(req, res);
};
