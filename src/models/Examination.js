import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Creates an examination
export const createExamination = async (payload) => {
  return await prisma.examination.create({
    data: {
      title: payload.examinationTitle,
      marks: payload.marks,
      subject_id: payload.subjectId,
      is_active: true,
      description: payload.description,
      total_marks: payload.totalMarks,
    },
  });
};

//Get examination by Exam Id
export const getExaminationById = async (id) => {
  return await prisma.examination.findUnique({
    where: {
      id,
    },
  });
};

//Get All examination
export const getAllExaminations = async (campusId) => {
  return await prisma.examination.findMany({ where: { campus_id: campusId } });
};

//Update examination
export const updateExamination = async (payload) => {
  return await prisma.examination.update({
    data: {
      title: payload.examinationTitle,
      marks: payload.marks,
      subject_id: payload.subjectId,
      is_active: payload.isActive,
      description: payload.description,
      campus_id: payload.campusId,
      total_marks: payload.totalMarks,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

//Soft Delete Examination
export const DeleteExamination = async (payload) => {
  return await prisma.examination.update({
    where: {
      id: payload.id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
    },
  });
};
