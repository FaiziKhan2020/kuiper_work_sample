import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

// Create Employee
export const createEmployee = async (payload) => {
  return await prisma.employee.create({
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      blood_group: payload.blood_group,
      gender: payload.gender,
      emergency_contact_name: payload.emergencyContactName,
      emergency_contract_number: payload.emergencyContactNumber,
      employee_assigned_id: payload.employeeAssignedId,
      education: payload.education,
      job_title: payload.jobTitle,
      religion: payload.religion,
      contact: payload.contact,
      address: payload.address,
      campus_id: payload.campusId || "defaul",
      company_id: payload.company_id || "defaul",
      user_id: payload.user_id || "defaul",
    },
  });
};

// Update Employee
export const updateEmployee = async (payload) => {
  return await prisma.employee.update({
    where: {
      id: payload.emp_id,
    },
    data: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      blood_group: payload.blood_group,
      gender: payload.gender,
      emergency_contact_name: payload.emergencyContactName,
      emergency_contract_number: payload.emergencyContactNumber,
      employee_assigned_id: payload.employeeAssignedId,
      education: payload.education,
      job_title: payload.jobTitle || payload.job_title,
      religion: payload.religion,
      address: payload.address,
      caste: payload.caste,
      campus_id: payload.campusId,
      company_id: payload.companyId,
      user_id: payload.userId,
      updated_at: getCurrentTimestamp(),
    },
  });
};

// soft Delete
export const deleteById = async (payload) => {
  return await prisma.employee.update({
    where: {
      id: payload.id,
    },
    data: {
      is_deleted: true,
      updated_at: getCurrentTimestamp(),
      deleted_at: getCurrentTimestamp(),
    },
  });
};

// Get all employee
export const getAllEmployee = async (payload) => {
  return await prisma.employee.findMany({
    include: {
      Campus: true,
      User: true,
      Company: true,
    },
  });
};

// Find unique employee
export const getuniqueEmployee = async (payload) => {
  return await prisma.employee.findMany({
    where: { id: payload.id },
    include: {
      Campus: true,
      User: true,
      Company: true,
    },
  });
};

// default Employee
export const defaultEmplloyee = async (payload) => {
  return await prisma.employee.create({
    data: {
      first_name: payload.firstName || " ",
      last_name: payload.lastName || " ",
      email: payload.email || " ",
      phone: payload.phone || " ",
      blood_group: payload.blood_group || " ",
      gender: payload.gender || " ",
      caste: payload.caste || " ",
      emergency_contact_name: payload.emergencyContactName || " ",
      emergency_contract_number: payload.emergencyContactNumber || " ",
      employee_assigned_id: payload.employeeAssignedId || " ",
      date_of_joining: payload.dateOfJoining || getCurrentTimestamp(),
      education: payload.education || " ",
      job_title: payload.jobTitle || " ",
      religion: payload.religion || " ",
      address: payload.contact || " ",
      campus_id: payload.campusId || "default",
      company_id: payload.companyId || "66ced557-df7f-4c0f-8f36-3c11ca1213ef",
      user_id: payload.userId,
    },
  });
};
