const mongoose = require('mongoose');

var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { timeseries: true });

const Video = mongoose.model('Video', videoSchema);

module.exports = {
    Video
}

// Aggregation functions
// write the best performance based aggregation query write very fast



// aggregation pipeline function and write the best performance based aggregation query
videoSchema.plugin(mongooseAggregatePaginate);


// module.exports = {
//     JWT_SECRET : "<secret>",
//     EMAIL: "steve.franecki@ethereal.email", // testing email & password
//     PASSWORD : "456"
// }


