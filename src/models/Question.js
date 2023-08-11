import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Creates an question
export const createQuestion = async (payload) => {
  return await prisma.question.create({
    data: {
      title: payload.QuestionTitle,
      marks: payload.marks,
      subject_id: payload.subjectId,
      exam_id: payload.examId,
      is_active: true,
    },
  });
};

//Get question by Id
export const getQuestionById = async (id) => {
  return await prisma.fees.findUnique(id);
};

//Get All question
export const getAllQuestionsByExam = async (examId) => {
  return await prisma.question.findMany({ where: { exam_id: examId } });
};

//Update question
export const updateQuestion = async (payload) => {
  return await prisma.question.update({
    data: {
      title: payload.QuestionTitle,
      marks: payload.marks,
      subject_id: payload.subjectId,
      exam_id: payload.examId,
      is_active: payload.isActive,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

//Soft Delete question
export const DeleteQuestion = async (id) => {
  return await prisma.question.update({
    where: {
      id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
    },
  });
};
