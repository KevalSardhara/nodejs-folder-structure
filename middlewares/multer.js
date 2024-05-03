const express = require('express')
const multer = require('multer')

const app = express();

const upload = multer({ storage: storage })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.resolve(), './public/images/avatar'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname;
        cb(null, fileName);
    }
});

module.exports = {
    upload,
}

// use the uniq suffix for the file name here nanoid
// example of the file upload function to make the perfect sense to make here

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file, req.body); // access all files data
});
