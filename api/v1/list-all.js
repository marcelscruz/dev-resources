const allowCors = require('../../utils/allow-cors')
const resourcesList = require('../../db/resources-list')

function listAll(req, res) {
    res.status(200).json({
        count: resourcesList.length,
        resources: resourcesList,
    })
}

module.exports = allowCors(listAll)
