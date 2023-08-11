// import { ApiGatewayManagementApi } from "aws-sdk";
import * as employeeService from "../../services/employee.service";

export const createEmployee = async (req, res) => {
  try {
    const { body } = req;
    const employee = await employeeService.createEmployee(body);
    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { body, params } = req;
    const payload = {
      body,
      params,
    };
    const employee = await employeeService.updateEmployee(payload);
    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const getAllEmployee = async (req, res) => {
  try {
    const { body } = req;
    const employee = await employeeService.getAllEmployee(body);
    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const getuniqueEmployee = async (req, res) => {
  try {
    const { params } = req;
    const employee = await employeeService.getEmployeeById(params);
    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    const { params } = req;
    const employee = await employeeService.deleteById(params);
    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const sendInvite = async (req, res) => {
  const { body } = req;
  try {
    const employee = await employeeService.registerEmployee(body);
    return await res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

// Active Employee
export const activeEmployee = async (req, res) => {
  try {
    // console.log(req.header("token"));
    const header = req.header("token");
    // console.log(header("token"));
    const { body } = req;
    const payload = {
      body,
      header,
    };
    const employee = await employeeService.activeEmployee(payload);
    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
