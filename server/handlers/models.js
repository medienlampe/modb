'use strict';
var dataProvider = require('../data/models.js');
/**
 * Operations on /models
 */
module.exports = {
    /**
     * summary: Add a new model to the database
     * description: 
     * parameters: body
     * produces: application/json
     * responses: 405
     */
    post: function addModel(req, res, next) {
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
     * summary: Update an existing model
     * description: 
     * parameters: body
     * produces: application/json
     * responses: 400, 404, 405
     */
    put: function updateModel(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        var status = 400;
        var provider = dataProvider['put']['400'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
