const { asyncHandler } = require("../utils/asyncHandler.js");

const { User } = require("../models/user.models.js");
const { cloudinaryFunction } = require("../utils/cloudinary.js");

const { ApiResponce } = require('../utils/apiResponceHandler.js');

const { ApiError } = require('../utils/apiError.js');


const registerUser = async (req, res, next) => {
    try {
        const { username, fullname, email, password } = req.body;
        
        
        if ([username, fullname, email, password].some((field) => field?.trim() === '')) {
            throw new ApiError(400, "Somthing want wrong!");
        }
        
        let findUser = await User.findOne({ $or: [{ email }, { username }] });

        console.log("------", req.files);
        
        if (findUser) {
            throw new ApiError(400, "Somthing want wrong!");
        }
        
        const avatarImagePath = req.files?.avatar[0]?.path;
        const coverImagePath = req.files?.coverImage[0]?.path;
        
        // if (!avatarImagePath) {
        //     throw new ApiError(400, "Avatar file is required");
        // }
            
        const avatar = await cloudinaryFunction(avatarImagePath);
        const coverImage = await cloudinaryFunction(coverImagePath);
            
        if (!avatar) {
            throw new ApiError(400, "Avatar file is required");
        }
            
        const user = await User.create({
            username: username.toLowerCase(),
            fullname,
            email,
            password,
            avatar: avatar?.url || '',
            coverImage: coverImage?.url || '',
        });

        let userData = await User.findOne({ _id : user._id }).select('-password -refreshToken');
        if(!userData) {
            throw new ApiError(400, "Somthing want wrong!");
        }

        return res.status(201).json(
            new ApiResponce(200, userData, "Successfully Register", true)
        )

        // return res.status(200).json({
        //     status: true,
        //     message: "user succefully register",
        // });

    } catch (error) {
    console.log("error log");
    return res.status(404).json({
        status: false,
        message: error.message,
        data: error.data,
        errors: error.errors
    });
}
};


module.exports = {
    registerUser,
};




// const registerUser = asyncHandler(async (req, res, next) => {
//     console.log("run here");
//     return res.status(200).json({
//         status: true,
//         message : "ok",
//     });
// });

