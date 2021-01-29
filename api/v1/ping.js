const allowCors = require('../../utils/allow-cors')

function ping(req, res) {
    res.status(200).send('pong')
}

module.exports = allowCors(ping)
