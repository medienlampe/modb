'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /models/findByTags
 */
module.exports = {
    /**
     * summary: Finds Models by tags
     * description: Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
     * parameters: tags
     * produces: application/json
     * responses: 200, 400
     * operationId: findModelsByTags
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/models/findByTags',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/models/findByTags',
                operation: 'get',
                response: '400'
            }, callback);
        }
    }
};
