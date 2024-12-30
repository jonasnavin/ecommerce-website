const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router()
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const brandName = req.body.brandName
    console.log(brandName)
    // let folderPath = ""
    // if (brandName.toLowerCase() === "realme") {
    //   folderPath = "realme"
    // }
    // else if (brandName.toLowerCase() === "redmi") {
    //   folderPath = "redmi"
    // }
    // else if (brandName.toLowerCase() === "samsung") {
    //   folderPath = "samsung"
    // }
    cb(null, `public/img`)
  },
  filename: (req, file, cb) => {
    const fileName = req.body.fileName + path.extname(file.originalname)
    cb(null, fileName)
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.json({
    message: 'File uploaded successfully!',
    file: req.file,
  });
});

const uploadDir = './public/img';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

module.exports = router