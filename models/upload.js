const express  = require('express');
const router = express.Router()
const Products  = require('../../models/Products')
router.use(express.json())
const multer = require('multer');
const { model } = require('mongoose');


///    uploading image ........................
const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb (null,'uploads');
  },
  limits:{
      files: 1,
      fileSize: 1024 * 1024
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  },
  onFileUploadStart: function(file) {
      console.log("Inside uploads");
      if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype === 'image/gif'|| file.mimetype == 'image/png') {
          return true;
      }
      else
      {
          return false;      
      }
  }
});

const upload = multer({storage : storage})