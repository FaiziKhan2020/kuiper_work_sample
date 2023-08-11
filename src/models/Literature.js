import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

//Create a Literature
export const createLiterature = async (payload) => {
  return await prisma.literature.create({
    data: {
      literature_name: payload.literatureName,
      literature_description: payload.literatureDescription,
      literature_type: payload.literatureType,
      course_id: payload.courseId,
      created_by: payload.createdBy,
      created_on: getCurrentTimestamp(),
      literature_language: payload.literatureLanguage,
      literature_url: payload.literatureUrl,
      company_id: payload.companyId,
    },
  });
};

// Get All Literatures
export const getAllLiteratures = async (companyId) => {
  return await prisma.literature.findMany({ where: { company_id: companyId } });
};

//Update an Literature
export const updateLiterature = async (payload) => {
  return await prisma.literature.update({
    data: {
      literature_name: payload.literatureName,
      literature_description: payload.literatureDescription,
      literature_type: payload.literatureType,
      literature_language: payload.literatureLanguage,
      literature_url: payload.literatureUrl,
      updated_by: payload.updatedBy,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

// Soft Delete An literature
export const deleteLiterature = async (payload) => {
  return await prisma.literature.update({
    data: {
      is_deleted: true,
      deleted_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
