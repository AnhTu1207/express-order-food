const jwt = require("jsonwebtoken");

const sign = (data, time) => {
  return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: time || "1d" });
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
