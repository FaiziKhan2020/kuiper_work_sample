import * as transactionService from "../../services/transaction.service";

export const createTransaction = async (req, res) => {
  try {
    const { body } = req;
    const transaction = await transactionService.createTransaction(body);
    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    return res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const { body } = req;
    const transaction = await transactionService.getTransactionById(body);
    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { body } = req;
    const transaction = await transactionService.updateTransaction(body);
    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { body } = req;
    const transaction = await transactionService.deleteTransaction(body);
    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json();
  }
};
