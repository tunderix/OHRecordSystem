// App/Models/gd_encounter.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GD_EncounterSchema   = new Schema({
    title: String,
    description: String,
    encounterType: Number,
    choices: [Number]
    },{
    timestamps: true
    }
);

module.exports = mongoose.model('GameData_Encounter', GD_EncounterSchema);


/*
{
    "title": "Fight: Orcs",
    "description": "Campfight",
    "encounterType": 5,
    "choices": [
        1,
        3
    ]
}
*/