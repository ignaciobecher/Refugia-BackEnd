const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("****CONEXION ESTABLECIDA****");
  } catch (err) {
    console.log("ERROR_CONECTANDO" + err);
  }
};

module.exports = dbConnect;
