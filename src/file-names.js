const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // let names = ["file", "file", "image", "file(1)", "file"];
  let newNames = [].concat(names);
  for(let i = 0; i < newNames.length - 1; i++) {
    let count = 1;
    for(let k = i + 1; k < newNames.length; k++) {
      if(newNames[i] === newNames[k]) {
      newNames[k] = `${newNames[i]}(${count})`;
      count++;
      } 
    }
  }
  return newNames;
}

module.exports = {
  renameFiles
};
