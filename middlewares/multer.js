const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.resolve(), './public/images/avatar'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname;
        console.log(fileName);
        cb(null, fileName);
    }
});
const upload = multer({ storage: storage });

module.exports = {
    upload,
}

// use the uniq suffix for the file name here nanoid
// example of the file upload function to make the perfect sense to make here
// graph chart is most import to make the complex application like the 'Zerodha' is vary famous for the make the complex application here

// HTTP and HTTP based events
// headers
// cors
// security
// http methods
// operating system to make the perfect resonce and request
// headers make the perfect


// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     console.log(req.file, req.body); // access all files data
// });
