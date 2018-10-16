// App/Models/gd_encounter.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GDEncounterSchema   = new Schema({
    title: String,
    description: String,
    encounterType: Number,
    choices: [Number]
    },{
    timestamps: true
    }
);

module.exports = mongoose.model('GameDataEncounter', GDEncounterSchema);


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