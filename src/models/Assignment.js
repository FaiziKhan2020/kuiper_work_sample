import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createAssignment = async (payload) => {
  const assignment = await prisma.assignment.create({
    data: {
      deadline: payload.deadline,
      description: payload.description,
      title: payload.title,
      document_url: payload.documentUrl,
      teacher_id: payload.teacherId,
    },
  });
  if (!assignment) throw new Error("Error while creating a new assignment!");
  for (const assignee of payload.assignees) {
    await prisma.assignmentGroup.create({
      data: {
        assignment_id: assignment.id,
        class_id: assignee.classId,
        student_id: assignee.id,
      },
    });
  }
};

export const updateAssignment = async (payload) => {
  await prisma.assignment.update({
    data: {
      deadline: payload.deadline,
      description: payload.description,
      title: payload.title,
      document_url: payload.documentUrl,
      teacher_id: payload.teacherId,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
  for (const assignee of payload.assignees) {
    await prisma.assignmentGroup.update({
      data: {
        assignment_id: assignment.id,
        class_id: assignee.classId,
        student_id: assignee.id,
        updated_at: getCurrentTimestamp(),
      },
      where: {
        id: assignee.id,
      },
    });
  }
};

export const getAllAssignmentsByTeacher = async (payload) => {
  return await prisma.assignment.findMany({
    where: {
      teacher_id: payload.id,
    },
    include: {
      AssignmentGroup: true,
    },
  });
};

export const getAllAssignmentsByStudent = async (payload) => {
  return await prisma.assignment.findMany({
    include: {
      AssignmentGroup: {
        where: {
          student_id: payload.id,
        },
      },
    },
  });
};

export const submitAssignment = async (payload) => {
  const assignment = await prisma.assignmentGroup.findFirst({
    where: {
      assignment_id: payload.assignmentId,
      student_id: payload.studentId,
    },
  });

  return await prisma.assignmentGroup.update({
    data: {
      is_late: payload.isLate,
      submission_date: getCurrentTimestamp(),
      submission_url: payload.submissionUrl,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: assignment.id,
    },
  });
};

export const evaluateAssignment = async (payload) => {
  const assignment = await prisma.assignmentGroup.findFirst({
    where: {
      assignment_id: payload.assignmentId,
      student_id: payload.studentId,
    },
  });
  return await prisma.assignmentGroup.update({
    data: {
      percentage: payload.percentage,
      remarks: payload.remarks,
      score: payload.score,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: assignment.id,
    },
  });
};
