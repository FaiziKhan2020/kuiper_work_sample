import express from "express";
import { me } from "../controllers/public/user.controller";
import * as batchController from "../controllers/private/batch.controller.js";
import * as campusController from "../controllers/private/campus.controller.js";
import * as departmentController from "../controllers/private/department.controller";
import * as eventController from "../controllers/private/event.controller";
import * as studentController from "../controllers/private/student.controller.js";
import * as classController from "../controllers/private/class.controller.js";
import * as noticeController from "../controllers/private/notice.controller.js";
import * as teacherController from "../controllers/private/teacher.controller.js";
import * as subjectController from "../controllers/private/subject.controller.js";
import * as userController from "../controllers/public/user.controller";
import * as employeeController from "../controllers/private/employee.controller";
import * as companyController from "../controllers/private/company.controller";
// import * as attendanceController from "../controllers/private/attendance.controller";

export const getPrivateRouter = () => {
  const router = express.Router();
  router.get("/me", me);

  // batch Routes
  router.post("/batch", batchController.createBatch);
  router.patch("/batch/:id", batchController.updateBatch);
  router.patch("/batch/delete/:id", batchController.deleteBatch);
  router.get("/batch", batchController.getAllBatch);
  router.get("/batch/:id", batchController.getBatchById);

  // campus Routes
  router.post("/campus", campusController.createCampus);
  router.patch("/mainCampus", campusController.updateCampusByCompanyID);
  router.get("/campus", campusController.getAllCampus);
  router.get("/campus/:id", campusController.getCampusById);
  router.patch("/campus/:id", campusController.updateCampus);
  router.patch("/campus/delete/:id", campusController.deleteCampus);

  // company Routes
  router.patch("/company", companyController.updateCompany);

  // notice Routes
  router.get("/notice", noticeController.allNotices);
  router.post("/notice", noticeController.addNotice);
  router.put("/notice/:id", noticeController.updateNotice);
  router.get("/notice/:id", noticeController.noticeById);
  router.delete("/notice/delete/:id", noticeController.removeNotice);

  // class Routes
  router.get("/class/campus/:id", classController.allClasses);
  router.get("/class/:id", classController.classById);
  router.post("/class", classController.addClass);
  router.patch("/class/:id", classController.updateClass);
  router.patch("/class/delete/:id", classController.removeClass);

  // student Routes
  router.post("/student", studentController.createStudent);
  router.patch("/student", studentController.activeStudentController);
  router.post("/student/sendinvite", studentController.sendInvite);
  router.patch("/student/:id", studentController.updateStudent);
  router.patch("/student/delete/:id", studentController.deleteById);
  router.get("/student", studentController.getAllStudentOfCampus);
  router.get("/student/:id", studentController.getStudentById);

  // employee Routes
  router.post("/employee", employeeController.createEmployee);
  router.patch("/employee", employeeController.activeEmployee);
  router.post("/employee/sendinvite", employeeController.sendInvite);
  router.patch("/employee/:id", employeeController.updateEmployee);
  router.patch("/employee/delete/:id", employeeController.deleteById);
  router.get("/employee", employeeController.getAllEmployee);
  router.get("/employee/:id", employeeController.getuniqueEmployee);

  // teacher Routes
  router.post("/teacher", teacherController.createTeacher);
  router.post("/teacher/sendinvite", teacherController.sendInvite);
  router.patch("/teacher/:id", teacherController.updateTeacher);
  router.patch("/teacher", teacherController.activeTeacher);
  router.get("/teacher", teacherController.getAllTeacher);
  router.get("/teacher/:id", teacherController.getById);
  router.patch("/teacher/delete/:id", teacherController.deleteTeacher);

  // subject Routes;
  router.post("/subject", subjectController.createSubject);
  router.patch("/subject/:id", subjectController.updateSubject);
  router.get("/subject", subjectController.getAll);
  router.get("/subject/:id", subjectController.getById);
  router.patch("/subject/delete/:id", subjectController.deleteByID);

  // user Routes
  router.get("/user/:id", userController.getUserById);

  return router;
};
