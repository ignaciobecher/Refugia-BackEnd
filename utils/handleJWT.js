const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

//Firmar
const tokenSign = async (user) => {
  const sign = jsonwebtoken.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

//Verificar que esta firmado
const verifyToken = async (tokenSign) => {
  try {
    return jsonwebtoken.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
