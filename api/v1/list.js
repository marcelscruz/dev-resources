const allowCors = require('../../utils/allow-cors')
const resourcesByCategory = require('../../db/resources-by-category')

function list(req, res) {
    const query = req.query.category
    const result = resourcesByCategory[query] || []

    res.status(200).json({
        count: result.length,
        resources: result,
    })
}

module.exports = allowCors(list)
