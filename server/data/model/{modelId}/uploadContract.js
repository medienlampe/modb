'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /model/{modelId}/uploadContract
 */
module.exports = {
    /**
     * summary: uploads an contract
     * description: 
     * parameters: modelId, additionalMetadata, file
     * produces: application/json
     * responses: 200
     * operationId: uploadFile
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/model/{modelId}/uploadContract',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
