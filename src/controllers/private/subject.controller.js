import * as subjectService from "../../services/subject.service.js";

export const createSubject = async (req, res) => {
  try {
    const { body } = req;
    const subject = await subjectService.createSubject(body);
    return res.status(200).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const updateSubject = async (req, res) => {
  try {
    const { body, params } = req;
    const payload = {
      body,
      params,
    };
    const subject = await subjectService.updateSubject(payload);
    return res.status(200).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getAll = async (req, res) => {
  try {
    const { body } = req;
    const subject = await subjectService.getAll(body);
    return res.status(200).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const getById = async (req, res) => {
  try {
    const { params } = req;
    const subject = await subjectService.getById(params);
    return res.status(200).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const deleteByID = async (req, res) => {
  try {
    const { params } = req;
    const subject = await subjectService.deleteByID(params);
    return res.status(200).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    return res.status(500).json();
  }
};
