import * as campusService from "../../services/campus.service.js";

export const createCampus = async (req, res) => {
  return await campusService.createCampus(req, res);
};

export const getAllCampus = async (req, res) => {
  try {
    const { body } = req;
    const campus = await campusService.getAllCampus(body);
    return res.status(200).json({
      success: true,
      data: campus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const getCampusById = async (req, res) => {
  return await campusService.getCampusById(req, res);
};

export const deleteCampus = async (req, res) => {
  return await campusService.deleteCampus(req, res);
};

export const updateCampus = async (req, res) => {
  return await campusService.updateCampus(req, res);
};

export const updateCampusByCompanyID = async (req, res) => {
  try {
    const { body } = req;
    const campus = await campusService.updateCampusByCompanyID(body);
    return res.status(200).json({
      success: true,
      data: campus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};
