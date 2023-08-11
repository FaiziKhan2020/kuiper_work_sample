import dotenv from "dotenv";

export const getPort = () => {
  return process.env.PORT || 4001;
};

export const getTokenSecret = () => {
  return process.env.TOKEN_SECRET || "zWIk898HskLbw8hWXMtW";
};
export const getTokenExpiry = () => {
  return process.env.TOKEN_EXPIRY || "3d";
};
export const getRefreshTokenExpiry = () => {
  return process.env.REFRESH_TOKEN_EXPIRY || "30d";
};
export const getTokenExpiryForRemember = () => {
  return process.env.REMEMBER_ME_TOKEN_EXPIRY || "15d";
};

export const getAWSAccessKeyId = () => {
  return process.env.AWS_ACCESS_KEY || "S3RVER";
};

export const getAWSEndpoint = () => {
  return process.env.AWS_ENDPOINT || "http://localhost:4568";
};

export const getAWSBucket = () => {
  return process.env.AWS_BUCKET || "temp-s3";
};

export const getAWSRegion = () => {
  return process.env.AWS_REGION || "";
};

export const getAWSSecret = () => {
  return process.env.AWS_SECRET || "S3RVER";
};

export const getMaxFileSize = () => {
  return (process.env.MAX_FILE_SIZE || 100) * 1000000; //In MBs
};

export const frontUrl = () => {
  return process.env.FRONTEND_URL || "http://localhost:3000";
};

export const sendGridApi = () => {
  return (
    process.env.SENDGRID_API_KEY ||
    ""
  );
};
