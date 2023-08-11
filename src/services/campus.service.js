import * as campusModel from "../models/Campus.js";
import { campusTransformer } from "../services/transformers/campus.transformer.js";

export const createCampus = async (req, res) => {
  try {
    const campus = await campusModel.createCampus(req.body);
    return res.status(200).json({
      success: true,
      data: campus,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getAllCampus = async (body) => {
  try {
    return await campusModel.getAllCampuses(body);

    // const filterData = campusTransformer(campus);
    // return await filterData();
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const getCampusById = async (req, res) => {
  try {
    const campus = await campusModel.getCampusById(req.params);
    return res.status(200).json({
      success: true,
      data: campus,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteCampus = async (req, res) => {
  try {
    const campus = await campusModel.deleteCampus(req.params);
    return res.status(200).json({
      success: true,
      data: campus,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateCampus = async (req, res) => {
  try {
    const { body } = req;
    const payload = {
      campusName: body.campusName,
      profileImage: body.profileImage,
      phone: body.phone,
      principle: body.principle,
      location: body.location,
      id: req.params.id,
    };
    const campus = await campusModel.updateCampus(payload);
    return res.status(200).json({
      success: true,
      data: campus,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// update campus by companyId:

export const updateCampusByCompanyID = async (body) => {
  try {
    const payload = {
      campusName: body.campusName,
      profileImage: body.profileImage,
      phone: body.phone,
      principle: body.principle,
      location: body.location,
      companyId: body.companyId,
    };
    const campus = await campusModel.updateCampusByCompanyID(payload);
    
    return campus;
  } catch (error) {
    console.log(error);
    return error;
  }
};
