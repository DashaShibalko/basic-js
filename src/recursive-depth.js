const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr,depht=[],count=1) {
      depht.push(count);

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], depht, count + 1);
            }
        }

        return Math.max(...depht);
   
   }
};