const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let age;
  if (isNaN(sampleActivity*1) || typeof(sampleActivity) !== 'string' || (sampleActivity*1) > 15 || (sampleActivity*1) <= 0 || sampleActivity.length === 0 || sampleActivity.includes(' ')) {
    return false;
  }
  else {
  age = Math.ceil(Math.log(MODERN_ACTIVITY/(sampleActivity)*1)/(0.693/HALF_LIFE_PERIOD));
  return age;
  }
}

module.exports = {
  dateSample
};
