export const departmentTransformer = (data) => {
  let filterArray = [];
  for (let i = 0; i < data.length; i++) {
    filterArray.push({
      id: data[i].id,
      campusId: data[i].campus_id,
      name:data[i].name,
      location: data[i].location,
      description:data[i].description,
      headOfDepartment:data[i].head_of_department,
      bannerImage: data[i].banner_image,
      createdAt:data[i].created_at,
      updatedAt: data[i].updated_at,
      deletedAt: data[i].deleted_at,
      isDeleted: data[i].is_deleted,
      Campus: data[i].Campus,
      Employee: data[i].Employee,
    });
  }

  return filterArray;
};
