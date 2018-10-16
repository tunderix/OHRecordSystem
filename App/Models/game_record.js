// App/Models/game_record.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecordSchema   = new Schema({
    playerName: String,
    tilesExplored: Number,
    biomesExplored: Number,
    daysPassed: Number, 
    charactersUnlocked: Number
});

module.exports = mongoose.model('GameRecord', RecordSchema);