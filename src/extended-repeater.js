module.exports = function repeater(str, options) {
    var repeatTimes = options.repeatTimes || 1;
    var separator = options.separator || "+";
    var addition = options.addition !== undefined ? options.addition : "";
    var additionRepeatTimes = options.additionRepeatTimes || 1;
    var additionSeparator = options.additionSeparator || "|";
  
    var resultAddition = "";
    for (var i = 1; i < additionRepeatTimes; i++) {
      resultAddition = `${resultAddition}${addition}${additionSeparator}`;
    }
    resultAddition += addition;
  
    var resultString = "";
    for (var i = 1; i < repeatTimes; i++) {
      resultString = `${resultString}${str}${resultAddition}${separator}`;
    }
    resultString += `${str}${resultAddition}`;
  
    return resultString;
};
  