export const studentTransformer = (data) => {
    
 
  let filterArray = [];
  for (let i = 0; i < data.length; i++) {
    filterArray.push({
      id: data[i].id,
      firstName: data[i].first_name,
      lastName: data[i].last_name,
      gender: data[i].gender,
      religion: data[i].religion,
      dateOfBirth: data[i].date_of_birth,
      contact: data[i].contact,
      address: data[i].address,
      enrollmentDate: data[i].enrollment_date,
      section: data[i].section,
      rollNumber: data[i].roll_number,
      img: data[i].profile_picture,
      isDeleted: data[i].is_deleted,
      deletedAt: data[i].deleted_at,
      campusName: data[i].Campus.campus_name,
      campusPhone: data[i].Campus.campus_phone,
      location: data[i].Campus.location,
      campusName: data[i].Campus.campus_name,
      batchName: data[i].Batch.batch_name,
      startDate: data[i].Batch.start_date,
      endDate: data[i].Batch.end_date,
      fatherFirstName: data[i].Parent.first_name,
      fatherLastName: data[i].Parent.last_name,
      contact: data[i].Parent.contact,
      email: data[i].Parent.email,
      address: data[i].Parent.address,
      isGuardian: data[i].Parent.is_guardian,
      className: data[i].Class.name,
      classLocation: data[i].Class.location,
    });
  }

  return filterArray;
};
