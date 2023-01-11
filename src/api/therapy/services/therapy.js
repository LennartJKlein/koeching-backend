'use strict';

/**
 * therapy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::therapy.therapy');
