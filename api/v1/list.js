const allowCors = require('../../utils/allow-cors')
const resourcesByCategory = require('../../db/resources-by-category')

function list(req, res) {
    const query = req.query.category
    const result = resourcesByCategory[query]

    res.status(200).json({
        count: result.length,
        data: result,
    })
}

module.exports = allowCors(list)
