const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator;
  if (options.separator) {
    separator = options.separator
  }
  else {
    separator = '+';
  }
  let additionSeparator;
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator
  }
  else {
    additionSeparator = '|';
  }
 let additionalString;

 if (options.addition !== undefined) {
  additionalString = options.addition + additionSeparator;
 subResult = additionalString.repeat(options.additionRepeatTimes - 1) + options.addition;
 let mainString = str + subResult + separator;
 result = mainString.repeat(options.repeatTimes - 1) + str + subResult;}
 else{
  mainString = str + separator;
  result = mainString.repeat(options.repeatTimes - 1) + str;
 }
 return result;
}

module.exports = {
  repeater
};
