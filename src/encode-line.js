const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = str.split('');
  let curStr = [];
  for(let i = 0; i < newStr.length; i++) {
    let repeat = 1;
    for(let k = i + 1; k < newStr.length; k++) {
      if(newStr[i] === newStr[k]) {
        repeat++;
        i++;
      } 
      else break;
    }
    repeat = repeat === 1 ? '' : repeat;  
    curStr.push(`${repeat}${newStr[i]}`);
  }
  return curStr.join('');
}

module.exports = {
  encodeLine
};
