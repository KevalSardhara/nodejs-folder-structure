const express = require('express');
const userRouter = express.Router();

userRouter.get("/", function (req, res, next) {
    return res.json({
        message: "Welcome to the protected route"
    });
});

module.exports = { userRouter };
