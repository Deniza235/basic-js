const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(arguments.length === 0) {
    return "Unable to determine the time of year!";
  } else if(Object.prototype.toString.call(date) !== '[object Date]' || Object.getOwnPropertySymbols(date).length !== 0) {
    throw new Error('Invalid date!');
  } 

  let season;
  let month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      return season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      return season = 'autumn';
      break;
  }
  return season;

}

module.exports = {
  getSeason
};
