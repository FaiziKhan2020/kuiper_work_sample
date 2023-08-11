import { getUrlFromKey } from "../../shared/functions/file-name-generation";

export const campusTransformer = (data) => {
  let filterArray = [];
  for (let i = 0; i < data.length; i++) {
    filterArray.push({
      id: data[i].id,
      campusName: data[i].campus_name,
      imgUrl: data[i].campus_imgurl,
      phone: data[i].campus_phone[i],
      headId: data[i].campus_headid,
      campusCode: data[i].campus_code,
      isDeleted: data[i].is_deleted,
      isActive: data[i].is_active,
      company: data[i].Company.name,
      companyLogo: data[i].Company.logoUrl,
      address: data[i].Company.address,
      city: data[i].Company.city,
      country: data[i].Company.country,
      contact: data[i].Company.primary_contact,
      plan: data[i].Company.plan,
      ExpireDate: data[i].Company.billing_expired,
    });
  }

  return filterArray;
};

export const campusPayloadTransformer = (data, companyId) => {
  if (!data) throw new Error("No Data");
  return {
    ...data,
    companyId,
  };
};

export const campusOnboardingDataTransformer = (payload) => {
  if (!payload) throw new Error("No Data");
  const {
    id,
    campus_name,
    campus_imgurl,
    campus_code,
    campus_phone,
    is_deleted,
    is_active,
    created_at,
  } = payload;

  return {
    id,
    campusName: campus_name,
    image: getUrlFromKey(campus_imgurl),
    code: campus_code,
    phone: campus_phone,
    isDeleted: is_deleted,
    isActive: is_active,
    createdAt: new Date(created_at),
  };
};
