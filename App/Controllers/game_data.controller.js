const gData = require('../GameData/GameData.json');
const encounterChoices = require('../GameData/EncounterChoices.json');
const EncounterController = require('./gd_encounter.controller.js');

exports.defaultGameData = (req, res) => {
    return res.send(gData);
};




  
exports.collectedGameData = (req, res) => {
    var allData = [];
    var data = [EncounterController.findAll, encounterChoices];

    Promise.all(data.map(partialData => {
        allData.push(pData);
    }))
    .then(result => {
        res.send(allData);
    })
    .catch(console.error);
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