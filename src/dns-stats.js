const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const info = {};
  let delimDomains;
  
  for(let i = 0; i < domains.length; i++) {
    delimDomains = domains[i].split('.').reverse();
    let address = '';
    delimDomains.forEach(element => {
    address += `.${element}`;
    
    if(info.hasOwnProperty(address)) {
      info[address]++;
    } else {
      info[address] = 1;
    }
  });
  }
  return info;
}

module.exports = {
  getDNSStats
};
