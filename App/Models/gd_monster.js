// App/Models/gd_monster.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GD_MonsterSchema   = new Schema({
    name: String,
    imageName: String,
    baseCombatStrength: Number,
    health: Number
    },{
    timestamps: true
    }
);

module.exports = mongoose.model('GameData_Monster', GD_MonsterSchema);


/*
{
    "name": "Orcs",
    "imageName": "",
    "baseCombatStrength": 10,
    "health": 100
}
*/