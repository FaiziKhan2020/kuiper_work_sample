import * as companyModel from "../models/Company";
import * as campusModel from "../models/Campus";
import * as userModel from "../models/User";
import * as parentsModel from "../models/Parent";
import * as companyTransformer from "./transformers/company.transformer";
import * as campusTransformer from "./transformers/campus.transformer";

export const getUserOnboarding = async (companyId) => {
  try {
    const data = {};
    //Check if company already exist with no default values
    const company = await companyModel.getCompany(companyId);
    if (!company) {
      data.company = null;
      return {
        message: "",
        statusCode: 200,
        data,
      };
    }
    data.company = company;

    //Check if campus(es) exist
    const campuses = await campusModel.getAllCampuses(companyId);
    if (!campuses.length) {
      data.campuses = campuses;
      return {
        message: "",
        statusCode: 200,
        data,
      };
    }

    //Check if users exist for the company
    const users = await userModel.getAllUserOfCompany(company);
    data.users = users;

    //Check if parents are invited for the company
    const parents = await parentsModel.getAllParentsByCompany(companyId);
    data.parents = parents;

    //Company Subdomain
    data.subdomain = company.subdomain;

    return {
      message: "",
      statusCode: 200,
      data,
    };
  } catch (error) {
    console.log(`Onboarding Service > getUserOnboarding > ${error.toString()}`);
    throw error;
  }
};

export const updateOrganization = async (companyId, data, logoImage = null) => {
  try {
    const payload = companyTransformer.companyPayloadTransformer(
      data,
      companyId
    );
    if (!payload)
      throw new Error("Unable to create Organization, No data is sent");

    //Upload image if exist
    if (logoImage) {
      let fileName = getFileName(logoImage);
      await uploadObject(fileName, logoImage);
      payload.logo = fileName;
    }
    const company = companyTransformer.companyOnboardingDataTransformer(
      await companyModel.updateCompany(payload)
    );
    return {
      message: "",
      statusCode: 200,
      data: { company },
    };
  } catch (error) {
    console.log(`Onboarding Service > getUserOnboarding > ${error.toString()}`);
    throw error;
  }
};

export const createCampus = async (companyId, data, image = null) => {
  try {
    const payload = campusTransformer.campusPayloadTransformer(data, companyId);
    if (!payload) throw new Error("Unable to create Campus, No data is sent");

    //Upload image if exist
    if (logoImage) {
      let fileName = getFileName(logoImage);
      await uploadObject(fileName, logoImage);
      payload.profileImage = fileName;
    }

    const rawData = await campusModel.createCampus(payload);
    const campus = campusTransformer.campusOnboardingDataTransformer(rawData);

    return {
      message: "",
      statusCode: 200,
      data: { campus },
    };
  } catch (error) {
    console.log(`Onboarding Service > createCampus > ${error.toString()}`);
    throw error;
  }
};

export const verifyAndCreateSubdomain = async (companyId, subdomain) => {
  try {
    // Check if subdomain already being used
    const isSubdomainExist = await companyModel.getCompanyBySubdomain(
      subdomain
    );
    if (isSubdomainExist)
      return {
        message: "Subdomain already exist! Please use something else",
        statusCode: 409,
        data: null,
      };

    //Update subdomain if not present for other companies
    await companyModel.updateCompanySubdomain(companyId, subdomain);

    return {
      message: "Subdomain successfully created!",
      statusCode: 200,
      data: subdomain,
    };
  } catch (error) {
    console.log(
      `Onboarding Service > verifyAndCreateSubdomain > ${error.toString()}`
    );
    throw error;
  }
};

export const confirmPaymentAndFinalizeOnboarding = (
  userId,
  companyId,
  data
) => {
  try {
    //@TODO: Implement Payment Code here
    //Create & Invite Users to platform
    //Create & Invite Parents to platform
  } catch (error) {
    console.log(
      `Onboarding Service > confirmPaymentAndFinalizeOnboarding > ${error.toString()}`
    );
    throw error;
  }
};
