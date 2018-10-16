const gData = require('../GameData/GameData.json');
const encounterChoices = require('../GameData/EncounterChoices.json');


exports.defaultGameData = (req, res) => {
    return res.send(gData);
};


exports.collectedGameData = (req, res) => {
    return res.send(encounterChoices);
};




//
// Encounter Choices
//

// These are resolved without database. These wont change!



//
// Encounters
//

//
// Heroes
//

//
// Monsters
//

//
// Monster Modifiers
//

//
// TileTypes
//