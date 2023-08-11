import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createCourse = async (payload) => {
  return await prisma.course.create({
    data: {
      course_name: payload.courseName,
      campus_id: payload.campusId,
      course_edition: payload.edition,
    },
  });
};

export const getCourseById = async (courseId) => {
  return await prisma.course.findUnique({ where: { id: courseId } });
};

export const updateCourse = async (payload) => {
  return await prisma.course.update({
    data: {
      course_name: payload.courseName,
      campusId: payload.campusId,
      course_edition: payload.edition,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

export const deleteCourse = async (payload) => {
  return await prisma.course.update({
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
