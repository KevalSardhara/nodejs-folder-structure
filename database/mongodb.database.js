const mongoose = require('mongoose');
const { DB_NAME } = require('../src/constant.js');

async function connectDB(URL) {
    const value = await mongoose.connect(`${URL}${DB_NAME}`);
    // console.log(value);
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

