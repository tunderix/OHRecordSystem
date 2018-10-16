const ecData = require('../GameData/EncounterChoices.json');

exports.encounterChoices = (req, res) => {
    return res.send(ecData);
};


/*
"encounterChoices": [
    {
        "id": 1,
        "label":"Yes"
    },
    {
        "id": 2,
        "label":"No"
    },
    {
        "id": 3,
        "label":"Fight"
    },
    {
        "id": 4,
        "label":"Trade"
    }
]
*/