import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

export const createEmployeesAttendance = async (payload) => {
  for (const attendance of payload.attendances) {
    await prisma.employeeAttendance.create({
      data: {
        attendance_status: attendance.status,
        created_by_id: attendance.createdById,
        date: attendance.date,
        campus_id: attendance.campusId,
        employee_id: attendance.employeeId,
        reason: attendance.reason,
      },
    });
  }
};

export const updateEmployeesAttendance = async (payload) => {
  for (const attendance of payload.attendances) {
    await prisma.employeeAttendance.update({
      data: {
        attendance_status: attendance.status,
        created_by_id: attendance.createdById,
        date: attendance.date,
        campus_id: attendance.campusId,
        employee_id: attendance.employeeId,
        reason: attendance.reason,
        updated_at: getCurrentTimestamp(),
      },
      where: {
        id: attendance.id,
      },
    });
  }
};

export const getEmployeeAttendance = async (id, fromDate, toDate) => {
  return await prisma.employeeAttendance.findMany({
    where: {
      employee_id: id,
      date: {
        gte: fromDate,
        lte: toDate,
      },
    },
  });
};

export const getEmployeesAttendances = async (campusId, fromDate, toDate) => {
  return await prisma.employeeAttendance.findMany({
    where: {
      campus_id: campusId,
      date: {
        gte: fromDate,
        lte: toDate,
      },
    },
  });
};

export const createStudentsAttendance = async (payload) => {
  for (const attendance of payload.attendances) {
    await prisma.studentAttendance.create({
      data: {
        attendance_status: attendance.status,
        teacher_id: attendance.teacherId,
        date: attendance.date,
        campus_id: attendance.campusId,
        student_id: attendance.studentId,
        reason: attendance.reason,
      },
    });
  }
};

export const updateStudentsAttendance = async (payload) => {
  for (const attendance of payload.attendances) {
    await prisma.studentAttendance.update({
      data: {
        attendance_status: attendance.status,
        teacher_id: attendance.teacherId,
        date: attendance.date,
        campus_id: attendance.campusId,
        student_id: attendance.studentId,
        reason: attendance.reason,
        updated_at: getCurrentTimestamp(),
      },
      where: {
        id: attendance.id,
      },
    });
  }
};

export const getStudentAttendance = async (id, fromDate, toDate) => {
  return await prisma.studentAttendance.findMany({
    where: {
      student_id: id,
      date: {
        gte: fromDate,
        lte: toDate,
      },
    },
  });
};

export const getStudentsAttendances = async (campusId, fromDate, toDate) => {
  return await prisma.studentAttendance.findMany({
    where: {
      campus_id: campusId,
      date: {
        gte: fromDate,
        lte: toDate,
      },
    },
  });
};
