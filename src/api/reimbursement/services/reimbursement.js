'use strict';

/**
 * reimbursement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reimbursement.reimbursement');
