import * as incomeService from "../../services/income.service.js";

export const createIncome = async (req, res) => {
  try {
    const { body } = req;
    const income = await incomeService.createIncome(body);
    return res.status(200).json({
      success: true,
      data: income,
    });
  } catch (err) {
    console.log(error);
    return res.status(500).json();
  }
};

export const updateIncome = async (req, res) => {
  try {
    const { params, body } = req;
    const payload = {
      params,
      body,
    };
    const income = await incomeService.updateIncome(payload);
    return res.status(200).json({
      success: true,
      data: income,
    });
  } catch (err) {
    console.log(error);
    return res.status(500).json();
  }
};

export const getAllIncome = async (req, res) => {
  try {
    const { body } = req;
    const income = await incomeService.getAllIncome(body);
    return res.status(200).json({
      success: true,
      data: income,
    });
  } catch (err) {
    console.log(error);
    return res.status(500).json();
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const { params } = req;
    const income = await incomeService.deleteIncome(params);
    return res.status(200).json({
      success: true,
      data: income,
    });
  } catch (err) {
    console.log(error);
    return res.status(500).json();
  }
};
