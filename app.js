const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/mongo");
const app = express();
const port = 3000;

app.use(
  //FUNDAMENTAL PARA ENVIAR DATOS JSON
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());
app.listen(port);

app.use("/", require("./routes"));
dbConnect();
