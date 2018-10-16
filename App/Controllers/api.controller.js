
// Retrieve and return all records from the database.
exports.apiDescription = (req, res) => {
    return res.send({
        status: 'Working as intended',
        message: 'Overworld Hero game record and content API',
    });
};