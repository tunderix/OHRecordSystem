const gData = require('../GameData/GameData.json');
const encounterChoices = require('../GameData/EncounterChoices.json');
const EncounterController = require('./gd_encounter.controller.js');


exports.defaultGameData = (req, res) => {
    return res.send(gData);
};

exports.collectedGameData = (req, res) => {
    var allData = [];
    allData.push(encounterChoices);
    allData.push(EncounterController.findAll);
    return res.send(allData);
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