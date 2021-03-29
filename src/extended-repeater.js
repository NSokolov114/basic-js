const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  //The str and addition parameters are strings by default. In case when type of these parameters is different, they must be converted to a string.
  // if (typeof str !== 'string') str = str.toString();
  if (options.repeatTimes === undefined) options.repeatTimes = 1; //sets the number of repetitions of the str;
  if (options.separator === undefined) options.separator = '+'; //is a string separating repetitions of the str;
  if (options.addition === undefined) options.addition = '';  //is an additional string that will be added to each repetition of the str;
  // if (typeof options.addition !== 'string') options.addition = options.addition.toString();
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;  //sets the number of repetitions of the addition;
  if (options.additionSeparator === undefined) options.additionSeparator = '|'; //is a string separating repetitions of the addition.
  let tmpStr = str;
  for (let i=0;i<options.additionRepeatTimes;i++) {
    tmpStr += options.addition;
    // if (typeof tmpStr !== 'string') tmpStr.toString();
    if (i !== options.additionRepeatTimes - 1) {
      tmpStr += options.additionSeparator;
    }
  }
  let newStr = '';
  for (let i=0;i<options.repeatTimes;i++) {
    newStr += tmpStr;
        if (i !== options.repeatTimes - 1) {
      newStr += options.separator;
    }
  }
  return newStr;
  throw new CustomError('Not implemented');
};
  