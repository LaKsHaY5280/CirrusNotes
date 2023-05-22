const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    
  const dbadd = process.env.REACT_APP_dbaddress;
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
