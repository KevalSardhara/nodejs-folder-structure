const express = require('express');
const userRouter = express.Router();
const { registerUser } = require('../controllers/user.controllers.js');

const { upload } = require('../middlewares/multer.js');

userRouter.post("/register", 
    upload.fields([
        {
            name : 'avatar',
            maxCount : 1,
        },
        {
            name : 'coverImage',
            maxCount : 1
        }
    ]),
    registerUser,
);
// userRouter.post("/login", loginUser);

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     console.log(req.file, req.body); // access all files data
// });

// userRouter.get("/", function (req, res, next) {
//     return res.json({
//         message: "Welcome to the protected route"
//     });
// });

module.exports = { userRouter };
