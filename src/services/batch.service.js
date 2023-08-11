import * as batchModel from "../models/Batch.js";


export const createBatch = async (req, res) => {
  try {
    const batch = await batchModel.createBatch(req.body);
    return res.status(200).json({
      success: true,
      data: batch,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

export const updateBatch = async (req, res) => {
  try {
    const { body } = req;
    let payload = {
      batch_name: body.batchName,
      startDate: body.startDate,
      endDate: body.endDate,
      id: req.params.id,
    };
    const updateBatch = await batchModel.updateBatch(payload);
    return res.status(200).json({
      success: true,
      data: updateBatch,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

export const deleteByID = async (req, res) => {
  const batchDelete = await batchModel.deleteBatch(req);
  return res.status(200).json({
    success: true,
    data: batchDelete,
  });
};

export const getAll = async (req, res) => {
  try {
    const allBatch = await batchModel.getAllBatch(req);
    res.status(200).json({
      success: true,
      data: allBatch,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

export const getById = async (req, res) => {
  try {
    const uniqueBatch = await batchModel.getBatchById(req);
    res.status(200).json({
      success: true,
      data: uniqueBatch,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
}


