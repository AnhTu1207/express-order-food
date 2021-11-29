const { jwt } = require(appRoot + "/helpers");
const { UserRepository } = require(appRoot + "/repositories");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        const { data } = jwt.verify(token.replace("Bearer ", ""));
        if (!data) {
            return res.status(401).send();
        }
        switch (data.role) {
            case "admin":
                const foundUser = await UserRepository.show(data.id);
                if (!foundUser) {
                    return res.status(401).send();
                } else {
                    next();
                }
                break;
            default:
                return res.status(401).send();
        }
    } catch {
        res.status(401).send();
    }
};
