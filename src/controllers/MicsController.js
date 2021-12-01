const { StoreService, UserService } = require(appRoot + "/services");
const { mailer, jwt } = require(appRoot + "/helpers");
const { map } = require("lodash");
class MicsController {
    async verify(req, res) {
        try {
            const token = req.params.token
            const { data } = jwt.verify(token.replace("Bearer ", ""));
            switch (data.role) {
                case "store":
                    const updateStore = await StoreService.update({ is_verified: true }, data.id);
                    if (updateStore) {
                        return res.status(200).json({ "status": 200, meesage: "Your account has been successfully verified" });
                    }
                    break;
                case "user":
                    const updateUser = await UserService.update({ is_verified: true }, data.id);
                    if (updateUser) {
                        return res.status(200).json({ "status": 200, meesage: "Your account has been successfully verified" });
                    }
                    break;
                case "driver":
                    break;
                default:
                    return res.status(400).json("Invalid");
            }
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res
                    .status(400)
                    .json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }
}

module.exports = new MicsController();
