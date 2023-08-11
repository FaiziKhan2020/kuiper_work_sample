export const eventTransformer = (data) => {
  let filterArray = [];
  for (let i = 0; i < data.length; i++) {
    filterArray.push({
      id: data[i].id,
      companyId: data[i].company_id,
      eventName: data[i].event_name,
      eventDescription: data[i].event_description,
      eventType: data[i].event_type,
      eventDate: data[i].event_date,
      createdBy: data[i].created_by,
      createdAt: data[i].created_at,
      campusId: data[i].campus_id,
      updatedAt: data[i].updated_at,
      deletedAt: data[i].deleted_at,
      isActive: data[i].is_active,
      isDeleted: data[i].is_deleted,
      Campus: data[i].Campus,
      Company: data[i].Company,
    });
  }

  return filterArray;
};
