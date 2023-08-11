import path from "path";

export const getFileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|pdf|doc|docx|ppt|pptx|PNG|JPG|JPEG/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  req.imageValidationError = "Invalid file type";
  cb(null, false);
};
