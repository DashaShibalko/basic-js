const { useFakeTimers } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if( date==undefined  )
  {
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date)!='[object Date]'){
    throw 'Error';
  }
  let month=date.getMonth();
 
    if(month==0 || month==1 || month==11){
      return 'winter'; 
    } 
    if(month==3 || month==4 || month==2){
      return 'spring'; 
    }
    if(month==6 || month==7 || month==5){
      return 'summer'; 
    }  
    if(month==9 || month==10 || month==8){
      return 'autumn'; 
    } 
 
};
