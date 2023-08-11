import { getUrlFromKey } from "../../shared/functions/file-name-generation";

export const companyPayloadTransformer = (data, id) => {
  if (!data) throw new Error("No Data");
  const { name, address, city, primaryContact, country } = data;
  return {
    id,
    name: name ?? "",
    address: address ?? "",
    city: city ?? "",
    country: country ?? "",
    primary_contact: primaryContact ?? "",
  };
};

export const companyOnboardingDataTransformer = (payload) => {
  if (!payload) throw new Error("No Data");
  const { name, country, city, address, primary_contact, logoUrl } = payload;
  return {
    name,
    city,
    country,
    address,
    primaryContact: primary_contact,
    logo: getUrlFromKey(getImageUrl),
  };
};
