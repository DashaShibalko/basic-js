const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members==null || members==undefined){
    return false;
  }
  let comandsName="";
  
 

  for (let i=0; i<members.length;i++){
    if(typeof(members[i])=='string')
    {
      members[i]=members[i].trim();
      comandsName=comandsName+members[i][0];
    }
  
  } 
  comandsName=comandsName.toUpperCase().split('');
  comandsName=comandsName.sort().join('');
  return comandsName;
};
