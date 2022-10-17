const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (typeof(arr) === 'object') {
      let result = arr.reduce((prev, el) => Math.max(prev, this.calculateDepth(el)), 0) + 1;
      return result;
    }
    else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
