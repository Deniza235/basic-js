const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: new Array(),
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position > this.chains.length || position < 1) {
      this.chains.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    let index = position - 1;
    this.chains.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let fullChain = this.chains.join('~~');
    this.chains.length = 0;
    return fullChain;
  }
};

module.exports = {
  chainMaker
};
