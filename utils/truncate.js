module.exports = function ({ text = '', limit = 100 }) {
    if (text.length > limit) {
        return text.substring(0, limit) + '...'
    }
    return text
}
