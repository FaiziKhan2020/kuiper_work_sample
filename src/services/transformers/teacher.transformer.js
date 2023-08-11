export const teacherTransformer = (data) => {
  let filterArray = [];
  for (let i = 0; i < data.length; i++) {
    filterArray.push({
      id: data[i].id,
      firstName: data[i].first_name,
      lastName: data[i].last_name,
      gender: data[i].gender,
      caste: data[i].caste,
      religion: data[i].religion,
      contact: data[i].contact,
      address: data[i].address,
      currentPosition: data[i].current_position,
      img: data[i].profile_picture,
      isDeleted: data[i].is_deleted,
      deletedAt: data[i].deleted_at,
      hiringDate: data[i].hiring_date,
      TeacherCampus: data[i].TeacherCampus,
      className: data[i].Class.name,
      location: data[i].Class.location,
      employeeFirstName: data[i].Employee.first_name,
      employeeLastName: data[i].Employee.last_name,
      email: data[i].Employee.email,
      emergencyContactName: data[i].Employee.emergency_contact_name,
      emergencyContractNumber: data[i].Employee.emergency_contract_number,
      dateOfJoining: data[i].Employee.date_of_joining,
      jobTitle: data[i].Employee.job_title,
      education: data[i].Employee.education,
    });
  }

  return filterArray;
};
