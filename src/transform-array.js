const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  let newArr = [];
  if (typeof arr !== typeof newArr) throw new CustomError('???') 
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        newArr.push(arr[i+1]);
        // console.log('double-next')
        break;
      case '--double-prev':
        if (i>1) newArr.push(arr[i-1]);
        // console.log('double-prev')
        break;
      case '--discard-next':
        i++;
        // console.log('discard-next')
        break;
      case '--discard-prev':
        if (i>1) newArr.pop();
        // console.log('discard-prev')
        break;
      default:
        newArr.push(arr[i]);
        // console.log('def')
        break;
    }
  }
  return newArr;
};
