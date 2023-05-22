const { sheltersModel } = require("../models/shelter");
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJWT");

const registerUser = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    const passwordHash = await encrypt(password);
    const body = { userName, email, password: passwordHash };
    const dataUser = await sheltersModel.create(body);
    dataUser.set("password", undefined, { strict: false }); //con esta propiedad, oculto la password al crearla
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser };
