'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: addModel
     */
    post: {
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/models',
                operation: 'post',
                response: '405'
            }, callback);
        }
    },
    /**
     * summary: Update an existing model
     * description: 
     * parameters: body
     * produces: application/json
     * responses: 400, 404, 405
     * operationId: updateModel
     */
    put: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/models',
                operation: 'put',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/models',
                operation: 'put',
                response: '404'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/models',
                operation: 'put',
                response: '405'
            }, callback);
        }
    }
};
