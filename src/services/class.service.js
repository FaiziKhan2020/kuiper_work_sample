import * as classRepository from "../models/Class";

export const addClass = async (body) => {
  try {
    let payload = {
      className: body.className,
      classLocation: body.classLocation,
      campusId: body.campusId,
    };
    return await classRepository.createClass(payload);
  } catch (exception) {
    console.log("Exception Occured... ");
    return {
      error: exception,
    };
  }
};

export const allClasses = async (body) => {
  try {
    const payload = {
      campusId: body.id,
    };
    return await classRepository.getAllClasses(payload);
  } catch (exception) {
    console.log("Exception Occured.");
    //Exception addition to stacktrace db for technical team only
    return {
      error: exception,
    };
  }
};

export const classById = async (body) => {
  try {
    let payload = {
      id: body.id,
    };
    return await classRepository.getClassById(payload);
  } catch (exception) {
    console.log("Exception Occured .");
    return {
      error: exception,
    };
  }
};

export const updateClass = async (body) => {
  try {
    let payload = {
      className: body.body.className,
      classLocation: body.body.classLocation,
      campusId: body.body.campusId,
      courseId: body.body.courseId,
      id: body.params.id,
    };
    return await classRepository.updateClass(payload);
  } catch (exception) {
    console.log("Exception Occured.");
    //Exception addition to stacktrace db for technical team only
    return {
      error: exception,
    };
  }
};
export const removeClass = async (body) => {
  try {
    let payload = {
      id: body.id,
    };
    return await classRepository.deleteClass(payload);
  } catch (exception) {
    console.log("Exception Occured.");
    //Exception addition to stacktrace db for technical team only
    return res.status(500).json();
  }
};
