const jwt = require("jsonwebtoken");

const sign = (data) => {
  return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: "1d" });
};

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  sign,
  verify,
};
