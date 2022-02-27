const repeatString = function(str, num) {
  let strVar = '';
  if(num < 0)
    return 'ERROR';

  for(let x = 0; x < num; x++)
  {
    strVar += str;
  }
  return strVar;
};

// Do not edit below this line
module.exports = repeatString;
