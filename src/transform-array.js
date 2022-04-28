const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr) !== true) throw new Error("'arr' parameter must be an instance of the Array!");
  let array = [].concat(arr);
  let result;
  if(array[0] === '--discard-prev' || array[0] === '--double-prev') {
    result = array.splice(array[0], 1);
  } else if(array[array.length - 1] === '--discard-next' || array[array.length - 1] === '--double-next') {
    result = array.splice(array[array.length - 2], 1);
  } 
  // let array = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
  for(let i = 0; i < array.length; i++) {
    if(array[i] === '--discard-next') {
      result = array.splice(array[i - 1], 2);
    } else if(array[i] === '--discard-prev') {
      result = array.splice(array[i - 2], 2);
    } else if(array[i] === '--double-next') {
      result = array.splice(array[i-1], 1, array[i + 1]);
    } else if(array[i] === '--double-prev') {
      result = array.splice(array[i-1], 1, array[i - 1]);
      i--;
    } 
  }
  return array;
  
}

module.exports = {
  transform
};
