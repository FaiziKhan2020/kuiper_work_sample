import * as departmentService from "../../services/department.service";

export const createDepartment = async (req, res) => {
  try {
    const { body } = req;
    const department = await departmentService.createDepartment(body);
    return res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    return res.status().json();
  }
};

export const allDepartmentsOfCompany = async (req, res) => {
  try {
    const { body } = req;
    const department = await departmentService.allDepartmentsOfCompany(body);
    return res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const allDepartmentsOfCampus = async (req, res) => {
  try {
    const { body } = req;
    const department = await departmentService.allDepartmentsOfCampus(body);
    return res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const updateDepartment = async (req, res) => {
  try {
    const { body, params } = req;
    const payload = {
      body,
      params,
    };
    const department = await departmentService.updateDepartment(payload);
    return res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const removeDepartment = async (req, res) => {
  try {
    const { params } = req;
    const department = await departmentService.removeDepartment(params);
    return res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    return res.status(500).json();
  }
};