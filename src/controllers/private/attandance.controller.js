import * as attendanceService from "../../services/attandance.service.js";

export const createEmployeesAttendance = async (req, res) => {
  try {
    const { body } = req;
    const attendance = await attendanceService.createEmployeesAttendance(body);
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const updateEmployeesAttendance = async (req, res) => {
  try {
    const { body, params } = req;
    const attendance = await attendanceService.updateEmployeesAttendance(
      body,
      params.id
    );

    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const updateStudentsAttendance = async (req, res) => {
  try {
    const { body, params } = req;
    const attendance = await attendanceService.updateStudentsAttendance(
      body,
      params.id
    );
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getAllEmployeesAttandance = async (req, res) => {
  try {
    const { body } = req;
    const attendance = await attendanceService.getAllEmployeesAttandance(body);
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getEmployeeAttandanceById = async (req, res) => {
  try {
    const { body } = req;
    const attendance = await attendanceService.getEmployeeAttandanceById(body);
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const createStudentAttendance = async (req, res) => {
  try {
    const { body } = req;
    const attendance = await attendanceService.createStudentsAttendance(body);
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getAllStudentsAttandance = async (req, res) => {
  try {
    const { body } = req;
    const attendance = await attendanceService.getAllStudentsAttandance(body);
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getStudentAttendanceById = async (req, res) => {
  try {
    const { body } = req;
    const attendance = await attendanceService.getStudentAttendanceById(body);
    return res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(500).json();
  }
};
