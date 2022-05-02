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
  constructor(isDirect = true) {
    this.flag = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let newMessage = message.toUpperCase();
    let newKey = key.toUpperCase();
    let result = '';
    let index = 0;
    while (newMessage.length > newKey.length) {
      newKey += newKey;
    }
    for(let i = 0; i < newMessage.length; i++) {
      if(this.alphabet.includes(newMessage[i])) {
        let letterAlphabet = this.alphabet.slice(this.alphabet.indexOf(newKey[index])) + this.alphabet;
        result += letterAlphabet[this.alphabet.indexOf(newMessage[i])];
      } else {
        result += newMessage[i];
        index--;
      }
      index++;
    }
    if (this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let newEncryptedMessage = encryptedMessage.toUpperCase();
    let newKey = key.toUpperCase();
    let result = '';
    let index = 0;
    while (newEncryptedMessage.length > newKey.length) {
      newKey += newKey;
    }
    for(let i = 0; i < newEncryptedMessage.length; i++) {
      if(this.alphabet.includes(newEncryptedMessage[i])) {
        let letterAlphabet = this.alphabet.slice(this.alphabet.indexOf(newKey[index])) + this.alphabet;
        result += this.alphabet[letterAlphabet.indexOf(newEncryptedMessage[i])];
      } else {
        result += newEncryptedMessage[i];
        index--;
      }
      index++;
    }
    if(!this.flag) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
