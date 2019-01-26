'use strict';
var dataProvider = require('../../data/model/{modelId}.js');
/**
 * Operations on /model/{modelId}
 */
module.exports = {
    /**
     * summary: Find model by ID
     * description: Returns a single model
     * parameters: modelId
     * produces: application/json
     * responses: 200, 400, 404
     */
    get: function getModelById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Updates a model in the database with form data
     * description: 
     * parameters: modelId, name, status
     * produces: application/json
     * responses: 405
     */
    post: function updateModelWithForm(req, res, next) {
        /**
         * Get the data for response 405
         * For response `default` status 200 is used.
         */
        var status = 405;
        var provider = dataProvider['post']['405'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Deletes a model
     * description: 
     * parameters: api_key, modelId
     * produces: application/json
     * responses: 400, 404
     */
    delete: function deleteModel(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        var status = 400;
        var provider = dataProvider['delete']['400'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
