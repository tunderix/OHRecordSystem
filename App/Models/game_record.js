// App/Models/game_record.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecordSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('GameRecord', RecordSchema);