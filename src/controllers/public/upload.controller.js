import {
  getFileName,
  getUrlFromKey,
} from "../../shared/functions/file-name-generation";
import { uploadObject } from "../../shared/functions/s3";

export const upload = async (req, res) => {
  try {
    let file = req.files[0];
    let fileName = getFileName(file);
    await uploadObject(fileName, file);
    let fileUrl = getUrlFromKey(fileName);
    //Update the image url to db
    return res.status(200).json({
      message: `File uploaded successfully!: You can access your file at ${fileUrl}`,
    });
  } catch (error) {
    console.error(error.toString());
    return res.status(500).json({ message: error.toString(), data: null });
  }
};
