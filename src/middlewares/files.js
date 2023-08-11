import multer from "multer";
import { getMaxFileSize } from "../shared/config/config";
import { getFileFilter } from "../shared/functions/file-filter";

const fileMulterS3 = multer({
  fileFilter: getFileFilter,
  limits: {
    fileSize: getMaxFileSize(),
  },
});

const formDataValidator = (req, res, err, next) => {
  console.log(req.file);
  console.log(err);
  if (err instanceof multer.MulterError || req.file === null) {
    return res
      .status(404)
      .json({ message: "Unexpected field. Required key 'file' not found" });
  } else if (err) {
    return res.status(500).json({ message: err.toString() });
  }
  return next();
};

export const getFileMiddleware = (req, res, next) =>
  fileMulterS3.any()(req, res, (err) => formDataValidator(req, res, err, next));
