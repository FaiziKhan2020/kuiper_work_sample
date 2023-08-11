export const transactionTransformer = (data) => {
    let filterArray = [];
    for (let i = 0; i < data.length; i++) {
      filterArray.push({
        id: data[i].id,
        companyId: data[i].company_id,
        entityName: data[i].entity_name,
        entityId: data[i].entity_id,
        entityValue: data[i].entity_value,
        createdById: data[i].created_by_id,
        updatedById: data[i].updated_by_id,
        title: data[i].title,
        description: data[i].description,
        createdAt: data[i].created_at,
        updatedAt: data[i].updated_at,
        deletedAt: data[i].deleted_at,
        isDeleted: data[i].is_deleted,
        Company: data[i].Company,
      });
    }
  
    return filterArray;
  };
  