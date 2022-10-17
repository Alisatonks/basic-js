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
  let array = n.toString().split('');
let newArray = []
for (let i = 0; i < array.length; i++) {
  let modifiedArray = array.slice(0);
modifiedArray.splice(i, 1);
let k = modifiedArray.join('')

newArray.push(k)
modifiedArray = []
}

return (Math.max(...newArray))
}

module.exports = {
  deleteDigit
};
