import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createTest = async (payload) => {
  const test = await prisma.test.create({
    data: {
      deadline: payload.deadline,
      description: payload.description,
      duration: payload.duration,
      title: payload.title,
      can_submit_late: payload.canSubmitLate,
      subject_id: payload.subjectId,
      teacher_id: payload.teacherId,
      company_id: payload.companyId,
    },
  });
  for (const assignee of payload.assignees) {
    await prisma.testGroup.create({
      data: {
        class_id: assignee.classId,
        student_id: assignee.studentId,
        test_id: test.id,
      },
    });
  }
};

export const updateTest = async (payload) => {
  return await prisma.test.update({
    data: {
      deadline: payload.deadline,
      description: payload.description,
      duration: payload.duration,
      title: payload.title,
      can_submit_late: payload.canSubmitLate,
      subject_id: payload.subjectId,
      teacher_id: payload.teacherId,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

export const createTestQuestions = async (payload) => {
  for (const question of payload.questions) {
    let questionCreated = await prisma.testQuestion.create({
      data: {
        type: question.type,
        image_url: question.type === "Image" ? question.imageUrl : null,
        marks: question.marks,
        value: question.value,
        test_id: payload.testId,
      },
    });
    for (const option of question.options) {
      await prisma.testQuestionOption.create({
        data: {
          value: option.value,
          is_correct: option.isCorrect,
          test_question_id: questionCreated.id,
        },
      });
    }
  }
};

export const updateTestQuestions = async (payload) => {
  for (const question of payload.questions) {
    await prisma.testQuestion.update({
      data: {
        type: question.type,
        image_url: question.type === "Image" ? question.imageUrl : null,
        marks: question.marks,
        value: question.value,
      },
      where: {
        id: question.id,
      },
    });
    for (const option of question.options) {
      await prisma.testQuestionOption.update({
        data: {
          value: option.value,
          is_correct: option.isCorrect,
        },
        where: {
          id: question.id,
        },
      });
    }
  }
};

export const submitTest = async (payload) => {
  let score = 0;
  for (const answer of payload.answers) {
    let isCorrect = await prisma.testQuestionOption.findFirst({
      where: {
        test_question_id: answer.testQuestionId,
        value: answer.value,
        is_correct: true,
        is_deleted: false,
      },
    });
    if (isCorrect) score += answer?.testQuestionMarks;
    await prisma.studentAnswer.create({
      data: {
        correct_answer: isCorrect ? true : false,
        is_attempted: answer.isAttempted,
        student_id: payload.studentId,
        test_question_id: answer.testQuestionId,
        marks_given: isCorrect ? answer.testQuestionMarks : 0,
        value: answer.value,
      },
    });
  }
  const testGroup = await prisma.testGroup.findFirst({
    where: {
      student_id: payload.studentId,
      test_id: payload.testId,
    },
  });
  await prisma.testGroup.update({
    data: {
      submission_date: getCurrentTimestamp(),
      is_late:
        new Date(payload.deadline).getTime() > getCurrentTimestamp().getTime()
          ? true
          : false,
      score,
    },
    where: {
      id: testGroup.id,
    },
  });
};

export const updateRemarks = async (payload) => {
  return await prisma.testGroup.update({
    data: {
      remarks: payload.remarks,
    },
    where: {
      id: payload.id,
    },
  });
};
