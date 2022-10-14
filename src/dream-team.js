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
  if(Array.isArray(members)) {
    let newArray = [];
    for (i = 0; i < members.length; i++) {
      if(typeof(members[i]) === 'string') {
        newArray.push(members[i].split(' ').join('').slice(0,1))}
    }
    let sortedArray = newArray.join('').toUpperCase().split('').sort();
    let result = sortedArray.join('');
    if (result.length === 0) {
      return false;
    }
    else {return result}
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
