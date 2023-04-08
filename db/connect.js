const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDb connected"))
    .catch((err)=> console.log(err))
};

module.exports = connectDB;
