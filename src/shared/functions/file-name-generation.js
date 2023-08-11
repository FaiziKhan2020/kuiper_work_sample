import path from "path";
import randToken from "rand-token";
import { getAWSBucket, getAWSEndpoint } from "../config/config";

export const getFileName = (file) => {
  return `upload/${
    randToken.uid(100).toString() + path.extname(file.originalname)
  }`;
};

export const getUrlFromKey = (key) =>
  `${getAWSEndpoint()}/${getAWSBucket()}/${key}`;
