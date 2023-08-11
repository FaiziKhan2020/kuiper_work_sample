import * as transactionModel from "../models/Transaction";

export const createTransaction = async (body) => {
  try {
    return await transactionModel.createTransaction(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getAllTransactions = async () => {
  try {
    return await transactionModel.findAllTransactions();
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getTransactionById = async (body) => {
  try {
    return await transactionModel.findTransactionById(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateTransaction = async (data) => {
  try {
    return await transactionModel.updateTransaction(data);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const deleteTransaction = async (body) => {
  try {
    return await transactionModel.deleteTransaction(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};
