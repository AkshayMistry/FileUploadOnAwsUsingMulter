const path = require('path');
const fs = require('fs');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


aws.config.update({
    secretAccessKey: '**************************',
    accessKeyId: '********************',
    region: '**********************'
});

s3 = new aws.S3();


const storage = multerS3({
    s3: s3,
    bucket: 'bucket-name',
    key: function(req, file, cb) {
        console.log(file);
        cb(null, file.originalname);
    }
})

exports.uploadVideo = multer({ storage: storage }).single('file_name');