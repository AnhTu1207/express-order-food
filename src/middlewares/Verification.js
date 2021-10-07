const { jwt } = require(appRoot + "/helpers");
const { StoreRepository, UserRepository } = require(appRoot + "/repositories");

module.exports = async (req, res, next) => {
    try {
        const token = req.params.token
        const { data } = jwt.verify(token.replace("Bearer ", ""));
        if (!data) {
            return res.status(401).send()
        }
        switch (data.role) {
            case "store":
                const foundStore = await StoreRepository.show(data.id);
                if (foundStore) {
                    if (foundStore.is_verified) {
                        return res.status(400).json({ status: 400, message: "Account already verified" });
                    }
                    else {
                        next();
                    }
                } else {
                    return res.status(400).send();
                }
                break;
            case "user":
                const foundUser = await UserRepository.show(data.id);
                if (foundUser) {
                    if (foundUser.is_verified) {
                        return res.status(400).json({ status: 400, message: "Account already verified" });
                    }
                    else {
                        next();
                    }
                } else {
                    return res.status(400).send();
                }
                break;
            default:
                return res.status(400).json("Invalid");
        }
    } catch {
        res.status(401).send();
    }
};
