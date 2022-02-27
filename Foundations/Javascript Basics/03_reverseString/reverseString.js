const reverseString = function(str) {
  let strR = '';

  for(let x = str.length-1; x >= 0; x--)
  {
    strR += str.charAt(x);
  }

  return strR;
};

// Do not edit below this line
module.exports = reverseString;
