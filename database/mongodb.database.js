const mongoose = require('mongoose');

async function connectDB(URL) {
    const value = await mongoose.connect(URL);
    return value;
}

// (async () => {
//     await mongoose.connect(url);
// })();

module.exports = {
    connectDB,
}

// await async function connectDatabase(url) {
// }

