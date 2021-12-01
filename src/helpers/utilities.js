const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require('aws-sdk')
const { v4: uuidv4 } = require("uuid");

const s3Config = new aws.S3({
    accessKeyId: process.env.AWS_USER_KEY,
    secretAccessKey: process.env.AWS_USER_SECRET,
});

const uploadImage = () => {
    // S3 config
    const multerS3Config = multerS3({
        s3: s3Config,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, uuidv4() + '_' + "image")
        }
    });

    const fileFilter = (req, file, callback) => {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            // upload only png,jpg,jpeg format
            return callback(new Error('Please upload a valid image'));
        }
        callback(undefined, true)
    }

    const upload = multer({ //multer s3 settings
        storage: multerS3Config,
        fileFilter: fileFilter,
    }).single("avatar");

    return upload;
}

const removeImage = (file_location) => {
    const file_name = file_location.substring(file_location.lastIndexOf("/") + 1);
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file_name
    }
    s3Config.deleteObject(params, (err, data) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = { uploadImage, removeImage }