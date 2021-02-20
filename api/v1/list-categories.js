const allowCors = require('../../utils/allow-cors')
const categoriesList = require('../../db/categories-list')

function listCategories(req, res) {
    res.status(200).json({
        count: categoriesList.length,
        categories: categoriesList,
    })
}

module.exports = allowCors(listCategories)
