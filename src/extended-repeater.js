const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let addition = (options.addition === undefined) ? '' : options.addition + '';
  let separator = (options.separator === undefined) ? '+' : options.separator + '';
  let addSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator + ''; 

  
}

module.exports = {
  repeater
};
