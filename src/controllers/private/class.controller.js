import * as classService from "../../services/class.service";

export const addClass = async (req, res) => {
  const { body } = req;
  try {
    const campusClass = await classService.addClass(body);
    return res.status(200).json({
      success: true,
      data: campusClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const allClasses = async (req, res) => {
  const { params } = req;
  try {
    const campusClass = await classService.allClasses(params);
    return res.status(200).json({
      success: true,
      data: campusClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const classById = async (req, res) => {
  const { params } = req;
  try {
    const campusClass = await classService.classById(params);
    return res.status(200).json({
      success: true,
      data: campusClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const updateClass = async (req, res) => {
  const { params, body } = req;
  const payload = {
    params,
    body,
  };
  try {
    const campusClass = await classService.updateClass(payload);
    return res.status(200).json({
      success: true,
      data: campusClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};

export const removeClass = async (req, res) => {
  const { params } = req;
  try {
    const campusClass = await classService.removeClass(params);
    return res.status(200).json({
      success: true,
      data: campusClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};
