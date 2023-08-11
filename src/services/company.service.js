import * as companyModel from "../models/Company";

export const updateCompany = async (body) => {
  console.log(body);
  try {
    const company = await companyModel.updateCompany(body);
    return company;
  } catch (err) {
    console.log(err);
    return error;
  }
};
