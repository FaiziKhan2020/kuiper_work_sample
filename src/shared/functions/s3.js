import AWS from "aws-sdk";
import {
  getAWSAccessKeyId,
  getAWSBucket,
  getAWSEndpoint,
  getAWSRegion,
  getAWSSecret,
} from "../config/config";

const endpoint = new AWS.Endpoint(getAWSEndpoint());
const client = new AWS.S3({
  bucket: getAWSBucket(),
  credentials: {
    accessKeyId: getAWSAccessKeyId(),
    secretAccessKey: getAWSSecret(),
  },
  sslEnabled: false,
  endpoint: endpoint,
  s3ForcePathStyle: true,
  region: getAWSRegion(),
});

export const getS3Client = async () => client;

export const deleteObject = async (key) => {
  return await client.deleteObject({ Bucket: getAWSBucket(), Key: key });
};

export const uploadObject = async (Key, Body) =>
  await client
    .upload({
      Key,
      Body: Buffer.from(Body.buffer, "binary"),
      Bucket: getAWSBucket(),
      ACL: "public-read",
    })
    .promise();
