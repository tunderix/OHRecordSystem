// App/Models/gd_tiletype.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GD_TileTypeSchema   = new Schema({
    id: Number,
    label: String,
    prefabName: String,
    visibilityDistance: Number,
    blocksLoS: Boolean
    },{
    timestamps: true
    }
);

module.exports = mongoose.model('GameData_TileType', GD_TileTypeSchema);


/*
{
    "id": 1,
    "label":"Plain",
    "prefabName":"prefab_TilePlatform_Grasslands_001",
    "visibilityDistance": 1,
    "blocksLoS": false
}
*/