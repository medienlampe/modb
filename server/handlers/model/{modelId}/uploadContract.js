'use strict';
var dataProvider = require('../../../data/model/{modelId}/uploadContract.js');
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
     */
    post: function uploadFile(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
