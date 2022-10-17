const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexArray = []
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] === -1) {
      indexArray.push([arr[i], i])
    }
  }
  for (let i = 0; i< arr.length; i++) {
    if(arr[i] === -1) {
      arr.splice(i, 1);
      i--
    }
  }
  arr.sort((a,b) => a - b);
  if (indexArray.length > 0) {
    for(let j = 0; j < indexArray.length; j++) {
      if(indexArray[j][1] === 0) {
        arr.unshift(-1)
      }
      else {
        let part1 = arr.slice(0, indexArray[j][1]);
        part1.push(-1);
        let part2 = arr.slice(indexArray[j][1], arr.length);
        arr = part1.concat(part2)
      }
    }
  }
return arr
}

module.exports = {
  sortByHeight
};
