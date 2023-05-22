const mongoose = require("mongoose");
require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = async () => {
  try {
    const dbadd = process.env.DATABASE_URL;
    await mongoose.connect(dbadd, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = connectToMongo;
