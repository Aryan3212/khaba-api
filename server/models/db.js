const mongoose = require('mongoose');
//require('dotenv').config();
const MONGO_URL = process.env.DB_KEY
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        console.log(e);
    })
    .then(() => {
        console.log(`Connected to khaba`);
    });

module.exports.User = require('./User');
module.exports.Waste = require('./Waste');
module.exports.ItemEachDay = require('./ItemEachDay');
