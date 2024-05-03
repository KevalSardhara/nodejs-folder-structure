const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const { resource } = require('../app');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const cloudinaryFunction = async (localPathName) => {
    try {
        if(!localPathName) {
            return next(new Error('File not found: ' + localPathName));
        }

        const fileResponce = await cloudinary.uploader.upload(localPathName, {
            public_id: "olympic_flag",
            resource_type: "auto"
        }, function (error, result) { console.log(result); });

        return fileResponce;
    } catch (error) {
        fs.unlink(localPathName); // remove local file path
        return next(new Error('File not found: ' + localPathName));
    }
}

module.exports = {
    cloudinaryFunction,
}


