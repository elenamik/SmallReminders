/**
 * Validation / Sanitization
 * Cleaning and checking user input
 */
const { body } = require('express-validator');
exports.principlesAdd = [
  body('uid').notEmpty(),
  body('content').notEmpty().trim().escape()
];

exports.principlesRead = [
  body('uid').notEmpty()
];

exports.principlesUpdate = [
  body('uid').notEmpty(),
  body('id').notEmpty().trim().escape(),
  body('content').notEmpty().trim().escape()
];

exports.principlesDelete = [
  body('uid').notEmpty(),
  body('id').notEmpty().trim().escape()
];

exports.userAdd = [
  body('uid').notEmpty()
];
