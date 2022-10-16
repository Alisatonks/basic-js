const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getUTCDate()
  } 
  catch {
    throw new Error('Invalid date!')
  };

  if (date instanceof Date === false) {
    return 'Unable to determine the time of year!'
  }
  else {
  monthNumber = date.getMonth();
  
  if (monthNumber >= 2 && monthNumber < 5) {
    return 'spring'
  }
  else if (monthNumber >= 5 && monthNumber < 8) {
    return 'summer'
  }
  else if (monthNumber >= 8 && monthNumber < 11) {
    return 'autumn (fall)'
  }
  else if (monthNumber === 11 || monthNumber === 0 || monthNumber ===1 ) {
    return 'winter'
  }
}
}

module.exports = {
  getSeason
};
