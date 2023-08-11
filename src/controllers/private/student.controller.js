import * as studentService from "../../services/student.service.js";

export const createStudent = async (req, res) => {
  try {
    const { body } = req;
    const student = await studentService.createStudent(body);
    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { body, params } = req;
    const payload = {
      body,
      params,
    };
    const student = await studentService.updateStudent(payload);
    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const getAllStudentOfCampus = async (req, res) => {
  try {
    const { body } = req;
    const student = await studentService.getAllStudentOfCampus(body);
    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { params } = req;
    const student = await studentService.getStudentById(params);
    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    const { params } = req;
    const student = await studentService.deleteById(params);
    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const sendInvite = async (req, res) => {
  const { body } = req;
  try {
    const student = await studentService.registerStudent(body);
    return await res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

// Active Student
export const activeStudentController = async (req, res) => {
  try {
    const header = req.header("token");
    const { body } = req;
    const payload = {
      body,
      header,
    };
    const student = await studentService.activeStudentAccount(payload);
    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
