const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(name) {
    if(name===true || arguments.length===0) this.name=true
    else if(name===false) this.name = false;
  }


  encrypt(message, key) {
    
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    let rez = ""

    for (let i = 0, j = 0; i < message.length; i++) {
      let x = message[i], leng = key.length
      if (j > leng - 1) j = 0
      let y = key[j], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90 && y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
        
          code = x.charCodeAt() + y.charCodeAt() - 65
          if (code > 90) rez += String.fromCharCode(code - 26)
          else rez += String.fromCharCode(code)
          j++;
      } else  rez += x;
    }
    if(this.name===false) return rez.split("").reverse().join("")
    return rez
  }


  decrypt(message, key) {
    
    let rez = ""
    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0, j = 0; i < message.length; i++) {
      let x = message[i]
      if (j + 1 > key.length) j = 0
      let y = key[j], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90 && y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
        
          code = x.charCodeAt() - y.charCodeAt() + 65
          if (code<65) rez += String.fromCharCode(code + 26)
          else rez += String.fromCharCode(code)
          j++
        
        }
      else  rez += x;

    }
    if(this.name===false) return rez.split("").reverse().join("")

    return rez
  }
}

module.exports = VigenereCipheringMachine;
