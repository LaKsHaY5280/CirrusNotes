const mongoose = require("mongoose");

const mongourl = "mongodb://localhost:27017/";

async function connectToMongo(){
  await mongoose.connect(mongourl, () => {
    console.log("connected");
  });
};

module.exports = connectToMongo;
