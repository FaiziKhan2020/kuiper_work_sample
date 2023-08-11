import * as departmentModel from "../models/Department";

export const createDepartment = async (body) => {
  try {
    return await departmentModel.createDepartment(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const allDepartmentsOfCompany = async (body) => {
  try {
    return await departmentModel.getAllDepartmentsOfCompany(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const allDepartmentsOfCampus = async (body) => {
  try {
    return await departmentModel.getAllDepartmentsOfCampus(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateDepartment = async (data) => {
  try {
    const { params, body } = data;
    console.log(body);
    const payload = {
      name: body.name,
      location: body.location,
      campus_id: body.campusId,
      description: body.description,
      head_of_department: body.headOfDepartment,
      banner_image: body.bannerImage,
    };
    return await departmentModel.updateDepartment(payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const removeDepartment = async(params)=>{
  try {
    return await departmentModel.deleteDepartment(params);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
}