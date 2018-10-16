const gData = require('../GameData/GameData.json');

exports.gameData = (req, res) => {
    return res.send(gData);
};
