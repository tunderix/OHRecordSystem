// App/Models/gd_encounterchoice.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GD_EncounterChoiceSchema   = new Schema({
    id: Number,
    label: String
    },{
    timestamps: true
    }
);

module.exports = mongoose.model('GameData_EncounterChoice', GD_EncounterChoiceSchema);


/*
{
    "id": 1,
    "label":"Yes"
}
*/