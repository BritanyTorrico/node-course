
const {getAge} = require('../plugins/get-age.plugin');
const {getUUI} = require('../plugins/get-id.plugin');
const {http} = require('../plugins/http-client.plugin');
const builLogger = require('../plugins/logger.plugin'); // por la exportacion por defecto


module.exports = {
    getAge,
    getUUI,
    http,
    builLogger
}
