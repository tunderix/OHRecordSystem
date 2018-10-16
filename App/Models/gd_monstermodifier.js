// App/Models/gd_monstermodifier.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GD_MonsterModifierSchema   = new Schema({
    id: Number,
    modifierValue: Number,
    label: String
    }, {
    timestamps: true
    }
);

module.exports = mongoose.model('GameData_MonsterModifier', GD_MonsterModifierSchema);


/*
{
    "id": 1,
    "modifierValue": 0,
    "label":"Tiny"
}
*/