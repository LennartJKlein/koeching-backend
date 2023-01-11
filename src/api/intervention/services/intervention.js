'use strict';

/**
 * intervention service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intervention.intervention');
