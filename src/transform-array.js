const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arr==null || !Array.isArray(arr)){
    throw ('error');
  }
  let arrCopy=[].concat(arr);

  
  let discardNext='--discard-next';
  let discardPrev='--discard-prev';
  let doubleNext='--double-next';
  let doublePrev='--double-prev';
  
  
  for(let i=0;i<arrCopy.length;i++){
   
      if(arrCopy[i]==discardNext && i!=arrCopy.length-1 && discardNext!=arrCopy[i+1] && doublePrev!=arrCopy[i+1] && discardPrev!=arrCopy[i+1] && doubleNext!=arrCopy[i+1])
      {
        arrCopy.splice(i+1,1)
      }
      else if(arrCopy[i]==discardPrev && i!=0 && discardNext!=arrCopy[i-1] && doublePrev!=arrCopy[i-1] && discardPrev!=arrCopy[i-1] && doubleNext!=arrCopy[i-1])
      {
        arrCopy.splice(i-1,1)
      }
      else if(arrCopy[i]==doubleNext && i!=arrCopy.length-1 && discardNext!=arrCopy[i+1] && doublePrev!=arrCopy[i+1] && discardPrev!=arrCopy[i+1] && doubleNext!=arrCopy[i+1])
      {
        arrCopy.splice(i+1,1,arrCopy[i+1],arrCopy[i+1])
      }
      else if(arrCopy[i]==doublePrev && i!=0 && discardNext!=arrCopy[i-1] && doublePrev!=arrCopy[i-1] && discardPrev!=arrCopy[i-1] && doubleNext!=arrCopy[i-1])
      {
        arrCopy.splice(i-1,2,arrCopy[i-1],arrCopy[i-1])
      }
  }
  
  let finalArr=[];

  for(let j=0;j<arrCopy.length;j++){
    if (discardNext!=arrCopy[j] && doublePrev!=arrCopy[j] && discardPrev!=arrCopy[j] && doubleNext!=arrCopy[j]){
      finalArr.push(arrCopy[j])
    }
  }
  return finalArr;
};
