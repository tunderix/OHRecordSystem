const gData = require('../GameData/GameData.json');
const encounterChoices = require('../GameData/EncounterChoices.json');
const EncounterController = require('./gd_encounter.controller.js');

exports.defaultGameData = (req, res) => {
    return res.send(gData);
};




  
exports.collectedGameData = (req, res) => {
    var allData = [];

    var promises = [EncounterController.findAll, encounterChoices].map(function(data) {
        return new Promise(function(resolve, reject) {
          var collection = conn.collection(data);
          collection.drop(function(err) {
            if (err) { return reject(err); }
            allData.push(data);
            console.log('dropped ' + data);
            resolve();
          });
        });
      });

    Promise.all(promises)
    .then(function() { return res.send(allData); })
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