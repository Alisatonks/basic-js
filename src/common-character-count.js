const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  array1 = s1.split('');
  array2 = s2.split('')
  array1.forEach((element) => {
    if(array2.includes(element)) {
      count++
      array2.splice(array2.indexOf(element), 1);
    }
  })
return count
}

module.exports = {
  getCommonCharacterCount
};
