const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstNameLetter = [];
  let secretName;

  if(Array.isArray(members) === true) {
    for(let i = 0; i < members.length; i++) {
      if(typeof(members[i]) === 'string') {
        let correctName = members[i].trim();
        firstNameLetter.push(correctName[0].toUpperCase());
      }
      secretName = String(firstNameLetter.sort().join(''));
    }
  } else {
    return false;
  }

  return secretName;
}

module.exports = {
  createDreamTeam
};
