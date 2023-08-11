import * as incomeModel from "../models/Income.js";

export const createIncome = async (payload) => {
  try {
    return await incomeModel.createIncome(payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateIncome = async (data) => {
  try {
    const { params, body } = data;
    const payload = {
      reason: body.reason,
      amount: body.amount,
      createdById: body.createdById,
      updatedById: body.updatedById,
      id: params.id,
    };

    return await incomeModel.updateIncome(payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getAllIncome = async (payload) => {
  try {
    return await incomeModel.getAllIncome(payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const deleteIncome = async (payload) => {
  try {
    return await incomeModel.deleteIncome(payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};
