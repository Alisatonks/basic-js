const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    chainMaker.array.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || position <=0 || position > chainMaker.array.length || Number.isInteger(position) === 'false') {
      chainMaker.array = []
      throw new Error("You can\'t remove incorrect link!");
    }
    else{
    let part1 = chainMaker.array.slice(0, position - 1);
    let part2 = chainMaker.array.slice(position, chainMaker.array.length);
    let result = (part1.concat(part2))
    chainMaker.array = result;
    return this;
  }
},

  reverseChain() {
    this.array.reverse();
    return this;
  },
  
  finishChain() {
    let result = '( ' + chainMaker.array.join(' )~~( ') + ' )';
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
