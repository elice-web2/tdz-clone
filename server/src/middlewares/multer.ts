import express from 'express';
import multer, { FileFilterCallback } from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import path from 'path';

const s3: aws.S3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const bucket: string = process.env.BUCKET || 'none';

type FileNameCallback = (error: Error | null, filename: string) => void;

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    key: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension);
    },
    acl: 'public-read-write',
  }),
});

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.BUCKET,
//     acl: 'public-read',
//     key: function (req, file, cb) {
//       cb(
//         null,
//         'images/origin/' +
//           Date.now() +
//           '.' +
//           file.originalname.split('.').pop(),
//       );
//     },
//   }),
// });

export { upload };
