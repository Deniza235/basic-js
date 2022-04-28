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

  const array = [].concat(arr);
  let result;

  if(array[0] === '--discard-prev' || array[0] === '--double-prev') {
    result = array.splice(array[0], 1);
  }
  if(array[array.length - 1] === '--discard-next' || array[array.length - 1] === '--double-next') {
    result = array.splice(array[array.length - 2], 1);
  } 
  
  for(let i = 0; i < array.length; i++) {
    
    if(array[i] === '--discard-next') {
      array[i] = null;
      i++;
      array[i] = null;
    } 
    if(array[i] === '--discard-prev') {
      array[i] = null;
      array[i - 1] = null;
    } 
    if(array[i] === '--double-next') {
      array[i] = array[i + 1];
    }
    if(array[i] === '--double-prev') {
      array[i] = array[i - 1];
    } 
  }
  return array.filter(el => el !== null);
  
}

module.exports = {
  transform
};
