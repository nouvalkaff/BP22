const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/upload/consumption/electricity/");
  },
  filename: (req, file, cb) => {
    let intDate = +new Date();
    let fileExt = file.originalname.split(".")[file.originalname.split(".").length - 1];
    let fileNameWithoutExt = file.originalname.replace(`.${fileExt}`, "");
    let newFileName = fileNameWithoutExt + "_" + intDate + "." + fileExt;
    file.originalname = newFileName;
    //console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;

// ======================================+++++++++++++++======================================
// ======================================+++++++++++++++======================================
// ======================================+++++++++++++++======================================

const multer = require("multer");
// const sharp = require("sharp");

const storage2 = multer.memoryStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const filter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images.", 400), false);
  }
};

exports.middlewareManual = multer({
  storage: storage2,
  fileFilter: filter,
}).fields([
  { name: "proof_of_payment", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

exports.middlewareManualMobile = multer({
  storage: storage,
  fileFilter: filter,
}).single("proof_of_payment");

// ======================================+++++++++++++++======================================
// ======================================+++++++++++++++======================================
// ======================================+++++++++++++++======================================

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  //console.log(file);
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
