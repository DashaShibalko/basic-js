const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  if(str=="") return false;
  if(typeof(str)!='string') str=String(str);
  if(typeof(options.addition)!='string') options.addition=String(options.addition);
  if(typeof(options.repeatTimes)!='number' || options.repeatTimes%1!=0) options.repeatTimes=1
  if(typeof(options.additionRepeatTimes)!='number' || options.additionRepeatTimes%1!=0 ) options.additionRepeatTimes=1;
  if (options.separator==undefined) options.separator='+';
  if (options.additionSeparator==undefined) options.additionSeparator="";

  let newStr=[];
  for(let i=0;i<options.repeatTimes;i++){
    newStr.push(str);
    
    if(options.addition!="undefined"){

      for(let j=0;j<options.additionRepeatTimes;j++){
        newStr.push(options.addition);
        newStr.push(options.additionSeparator);
      }
      newStr.pop();
    }
    
    newStr.push(options.separator);
  }
  newStr.pop();
  return newStr.join('');
};
  