import * as teacherService from "../../services/teacher.service.js";

export const createTeacher = async (req, res) => {
  try {
    const { body } = req;
    const teacher = await teacherService.createTeacher(body);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { body, params } = req;
    const payload = {
      body,
      params,
    };
    const teacher = await teacherService.updateTeacher(payload);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const getAllTeacher = async (req, res) => {
  try {
    const { body } = req;
    const teacher = await teacherService.getAllTeacher(body);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const getById = async (req, res) => {
  try {
    const { params } = req;
    const teacher = await teacherService.getByID(params);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const { params } = req;
    const teacher = await teacherService.deleteTeacher(params);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const sendInvite = async (req, res) => {
  const { body } = req;
  try {
    const teacher = await teacherService.registerTeacher(body);
    return await res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

// Active Teacher
export const activeTeacher = async (req, res) => {
  try {
    const header = req.header("token");
    const { body } = req;
    const payload = {
      body,
      header,
    };
    const teacher = await teacherService.activeTeacher(payload);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
