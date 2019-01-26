'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getModelById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/model/{modelId}',
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
                path: '/model/{modelId}',
                operation: 'get',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/model/{modelId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Updates a model in the database with form data
     * description: 
     * parameters: modelId, name, status
     * produces: application/json
     * responses: 405
     * operationId: updateModelWithForm
     */
    post: {
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/model/{modelId}',
                operation: 'post',
                response: '405'
            }, callback);
        }
    },
    /**
     * summary: Deletes a model
     * description: 
     * parameters: api_key, modelId
     * produces: application/json
     * responses: 400, 404
     * operationId: deleteModel
     */
    delete: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/model/{modelId}',
                operation: 'delete',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/model/{modelId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
