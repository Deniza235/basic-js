const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // let email = 'prettyandsimple@example.com';
  let address = email.split('@');
  
  return address[address.length-1];
}

module.exports = {
  getEmailDomain
};
