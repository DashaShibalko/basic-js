const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chainArray':[],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
      this.chainArray.push('( '+String(value)+' )');
      return this;
    
  }, 
  removeLink(position) {
    if(!(Number.isInteger(position)) || this.chainArray[position]==undefined || position<0){
      this.chainArray=[];
      throw 'error';
    }
    this.chainArray.splice(position-1,1);
    return this;
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let str=this.chainArray.join('~~');
    this.chainArray=[];
    return str ;
  }
};

module.exports = chainMaker;
