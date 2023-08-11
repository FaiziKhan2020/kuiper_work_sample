import * as attandanceModel from "../models/Attendance.js";

export const createEmployeesAttendance = async (body) => {
  try {
    return await attandanceModel.createEmployeesAttendance(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const createStudentsAttendance = async (body) => {
  try {
    return await attandanceModel.createStudentsAttendance(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateEmployeesAttendance = async (data) => {
  try {
    const { body, params } = data;
    console.log(body);
    const payload = {
      attendanceStatus: body.status,
      createdById: body.createdById,
      date: body.date,
      campusId: body.campusId,
      employeeId: body.employeeId,
      reason: body.reason,
    };
    return await attandanceModel.updateEmployeesAttendance(payload,params.id);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateStudentsAttendance = async (data) => {
    try {
      const { body, params } = data;
      const payload = {
        attendanceStatus: body.status,
        createdById: body.createdById,
        date: body.date,
        campusId: body.campusId,
        employeeId: body.employeeId,
        reason: body.reason,
      };
      return await attandanceModel.updateStudentsAttendance(payload, params.id);
    } catch (error) {
      console.log(error);
      return {
        Error: error,
      };
    }
  };

export const getAllEmployeesAttandance = async (body) => {
  try {
    return await attandanceModel.getEmployeesAttendances(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getEmployeeAttandanceById = async (body) => {
  try {
    return await attandanceModel.getEmployeeAttendance(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const getAllStudentsAttandance = async (body) => {
    try {
      return await attandanceModel.getStudentsAttendances(body);
    } catch (error) {
      console.log(error);
      return {
        Error: error,
      };
    }
  };
  
  export const getStudentAttendanceById = async (body) => {
    try {
      return await attandanceModel.getStudentAttendance(body);
    } catch (error) {
      console.log(error);
      return {
        Error: error,
      };
    }
  };
