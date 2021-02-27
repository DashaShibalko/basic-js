const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(type){
    this.type=type;
  }
  
  encrypt(message,key) {
    if(message==undefined || key==undefined){}
  }    
  decrypt(encryptedMessage,key) {
    if(message==undefined || key==undefined){}

  }
}

module.exports = VigenereCipheringMachine;
