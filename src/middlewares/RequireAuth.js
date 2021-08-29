const { jwt } = require(appRoot + "/helpers");
const { UserRepository } = require(appRoot + "/repositories");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    const { data } = jwt.verify(token.replace("Bearer ", ""));
    if (!data) {
      return res.status(401).send();
    }

    const foundUser = await UserRepository.getUserById(data.id);
    if (!foundUser) {
      return res.status(401).send();
    } else {
      next();
    }
  } catch {
    res.status(401).send();
  }
};
