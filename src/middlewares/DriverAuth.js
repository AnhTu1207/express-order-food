const { jwt } = require(appRoot + "/helpers");
const { DriverRepository } = require(appRoot + "/repositories");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        const { data } = jwt.verify(token.replace("Bearer ", ""));
        if (!data) {
            return res.status(401).send();
        }

        const foundDriver = await DriverRepository.show(data.id);
        if (!foundDriver) {
            return res.status(401).send();
        } else {
            next();
        }
    } catch {
        res.status(401).send();
    }
};
