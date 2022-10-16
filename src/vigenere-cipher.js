const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
 
  encrypt(string, key) {
    if (!(string && key)) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let upperKey = key.toUpperCase().split('');
  let upperString = string.toUpperCase().split('')
  let keyArray = [];
  let stringArray = [];
  for (let i = 0; i < upperKey.length; i++) {
    keyArray.push(alphabet.indexOf(upperKey[i]))
  }
  for (let i = 0; i < upperString.length; i++) {
    if (alphabet.indexOf(upperString[i]) >=0) {
      stringArray.push(alphabet.indexOf(upperString[i]))
    }
    else {
      stringArray.push(upperString[i])
    }
  }
  let keyArray2 = [];
   let k = 0;
  for(let i=0; i < stringArray.length; i++) {
    if (k < keyArray.length) {
    if (alphabet.indexOf(upperString[i]) >=0) {
    keyArray2.push(keyArray[k])
  k++}
    else {
      keyArray2.push(stringArray[i]);
      
    }
  }
  else {
    k = 0;
    if (alphabet.indexOf(upperString[i]) >=0) {
      keyArray2.push(keyArray[k])
    k++}
      else {
        keyArray2.push(stringArray[i]);
      }
  }
  }
  let modifiedArray = [];
  for (let i=0; i < stringArray.length; i++) {
    if (alphabet.indexOf(upperString[i]) >=0) {
    modifiedArray[i] = (stringArray[i] + keyArray2[i]) % 26;
    }
    else {
      modifiedArray[i] = stringArray[i]
    }
  }
  let encryptText = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (alphabet.indexOf(upperString[i]) >=0) {
      encryptText.push(alphabet[modifiedArray[i]])
    }
    else {
      encryptText.push(stringArray[i])
    }
  }
  result = encryptText;
  return this.type ? encryptText.join('') : encryptText.reverse().join('')
  }
  


  decrypt(string, key) {
    if (!(string && key)) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let upperKey = key.toUpperCase().split('');
    let upperString = string.toUpperCase().split('')
    let keyArray = [];
    let stringArray = [];
    for (let i = 0; i < upperKey.length; i++) {
      keyArray.push(alphabet.indexOf(upperKey[i]))
    }
    for (let i = 0; i < upperString.length; i++) {
      if (alphabet.indexOf(upperString[i]) >=0) {
        stringArray.push(alphabet.indexOf(upperString[i]))
      }
      else {
        stringArray.push(upperString[i])
      }
    }
    let keyArray2 = [];
   let k = 0;
  for(let i=0; i < stringArray.length; i++) {
    if (k < keyArray.length) {
    if (alphabet.indexOf(upperString[i]) >=0) {
    keyArray2.push(keyArray[k])
  k++}
    else {
      keyArray2.push(stringArray[i]);
    }
  }
  else {
    k = 0;
    if (alphabet.indexOf(upperString[i]) >=0) {
      keyArray2.push(keyArray[k])
    k++}
      else {
        keyArray2.push(stringArray[i]);
      }
  }
  }
  let modifiedArray = [];
  for (let i=0; i < stringArray.length; i++) {
    if (alphabet.indexOf(upperString[i]) >=0) {
      if ((stringArray[i] - keyArray2[i]) >= 0) {
    modifiedArray[i] = (stringArray[i] - keyArray2[i]) % 26;
      }
      else{
        modifiedArray[i] = (stringArray[i] - keyArray2[i] + 26) % 26
      }
    }
    else {
      modifiedArray[i] = stringArray[i]
    }
  }
  let decryptText = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (alphabet.indexOf(upperString[i]) >=0) {
      decryptText.push(alphabet[modifiedArray[i]])
    }
    else {
      decryptText.push(stringArray[i])
    }
  }
  return this.type ? decryptText.join('') : decryptText.reverse().join('')
  }
  }


module.exports = {
  VigenereCipheringMachine
};
