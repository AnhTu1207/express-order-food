const { StoreService } = require(appRoot + "/services");
const { jwt } = require(appRoot + "/helpers");

class MicsController {
    async verify(req, res) {
        const token = req.params.token
        const { data } = jwt.verify(token.replace("Bearer ", ""));
        switch (data.role) {
            case "store":
                const updateStore = await StoreService.update({ is_verified: true }, data.id);
                if (updateStore) {
                    return res.status(200).json({ "status": 200, data: updateStore[1][0] });
                }
                break;
            case "user":
                break;
            default:
                return res.status(400).json("Invalid");
        }
    }
}

module.exports = new MicsController();
