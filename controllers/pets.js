const PUBLIC_URL = process.env.PUBLIC_URL;
const { petsModel } = require("../models/pets");

const uploadPhoto = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };

  const data = await petsModel.create(fileData);
  res.send({ file });
};

module.exports = { uploadPhoto };
