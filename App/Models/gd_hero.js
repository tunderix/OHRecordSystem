// App/Models/gd_hero.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GD_HeroSchema   = new Schema({
    name: String,
    logoImageName: String,
    combatStrength: Number,
    healthModifier: Number
    },{
    timestamps: true
    }
);

module.exports = mongoose.model('GameData_Hero', GD_HeroSchema);


/*
{
    "name": "Mauri",
    "logoImageName": "",
    "combatStrength": 10,
    "healthModifier": 10
}
*/