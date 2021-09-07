const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const uploadImage = (destination) => {
    const storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, callback) {
            callback(null, appRoot + "/upload/" + destination + "/");
        },
        filename: function (req, file, callback) {
            if (file) {
                return callback(null, uuidv4() + "_" + file.originalname)
            }
        }
    });

    const fileFilter = (req, file, callback) => {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            // upload only png,jpg,jpeg format
            return callback(new Error('Please upload a valid image'))
        }
        callback(undefined, true)
    }

    const upload = multer({ //multer settings
        storage: storage,
        fileFilter: fileFilter,
    }).single("avatar");

    return upload;
}

module.exports = { uploadImage }