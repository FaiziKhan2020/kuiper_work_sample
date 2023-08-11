import * as subjectModel from "../models/Subject.js";

export const createSubject = async (body) => {
  try {
    return await subjectModel.createSubject(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateSubject = async (data) => {
  try {
    const { params, body } = data;
    console.log(body);
    const payload = {
      subjectName: body.subjectName,
      companyId: body.companyId,
      id: params.id,
    };
    return await subjectModel.updateSubject(payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getAll = async (body) => {
  try {
    return await subjectModel.getAllSubjects(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getById = async (params) => {
  try {
    
    
    return await subjectModel.findUniqueSubject(params);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const deleteByID=async(params)=>{
  try {
    return await subjectModel.deleteByID(params);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
}
