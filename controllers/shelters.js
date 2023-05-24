const { sheltersModel } = require("../models/shelter");
const { petsModel } = require("../models/pets");
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleHTTPError");
const { tokenSign } = require("../utils/handleJWT");
const _ = require("lodash");

//Regostrar usuario
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
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

//Logear usuario
const loginUser = async (req, res) => {
  const user = await sheltersModel
    .findOne({ email: req.body.email })
    .select("password name role email");

  if (!user) {
    console.log("Usuario no encontrado.");
  }
  const plainPassword = req.body.password;
  const hashPassword = user.get("password");
  const check = await comparePasswords(plainPassword, hashPassword);

  if (!check) {
    console.log("Error al comparar contraseñas hasheadas");
    return null;
  }
  user.set("password", undefined, { strict: false });
  const data = {
    token: await tokenSign(user),
    user,
  };
  res.send({ data });
  const userId = data.user._id;
  console.log("Usuario logeado.");
  console.log("UserId:", userId);
};

//Actualizar datos del refugio una vez actualizado
const updateShelter = async (req, res) => {
  try {
    const { id } = req.params;
    const { shelterName, telephone, address, city } = req.body;
    const body = { shelterName, telephone, address, city };
    const shelter = await sheltersModel.findByIdAndUpdate({ _id: id }, body);
    res.send(shelter);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_SHELTER");
  }
};

//Mostrar todos los refugios
const getShelters = async (req, res) => {
  try {
    const shelters = await sheltersModel.find();

    const filteredShelters = shelters.map((shelter) => {
      const filteredShelter = _.omit(shelter.toObject(), [
        "password",
        "userName",
        "email",
        "_id",
        "createdAt",
        "updatedAt",
        "__v",
      ]);

      return filteredShelter;
    });

    res.send({ filteredShelters });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_SHELTERS");
  }
};

//Mostrar un refugio
const getSingleShelter = async (req, res) => {
  try {
    const { id } = req.params;
    const shelter = await sheltersModel.findById({ _id: id });
    const filteredShelter = _.omit(shelter.toObject(), [
      "password",
      "userName",
      "email",
      "_id",
      "createdAt",
      "updatedAt",
      "__v",
    ]);
    res.send(filteredShelter);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_SHELTER");
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateShelter,
  getShelters,
  getSingleShelter,
};
