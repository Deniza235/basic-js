const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newDig = String(n).split('');
  let result = [];
  let index = 0;
  while(index < newDig.length) {
    let arrDig = [...newDig];
    arrDig.splice(index, 1);
    result.push(+arrDig.join(''));
    index++;
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
