import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create TeacherSubject
export const createTeacherSubject = async (payload) => {
  return await prisma.teacherSubject.create({
    data: {
      subject_id: payload.subjectId,
      teacher_id: payload.teacherId,
    },
  });
};

// Update TeacherSubject
export const updateTeacherSubject = async (payload) => {
  return await prisma.teacherSubject.update({
    where: {
      id: payload.id,
    },
    data: {
      subject_id: payload.subjectId,
      teacher_id: payload.teacherId,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// Soft Delete by id
export const deleteByID = async (id) => {
  return await prisma.teacherSubject.update({
    where: {
      id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
  });
};

// Find unique TeacherSubject
export const findUniqueTeacherSubject = async (id) => {
  return await prisma.teacherSubject.findUnique({
    where: { id },
    include: {
      Teacher: true,
      Subject: true,
    },
  });
};
