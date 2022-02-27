const ftoc = function(num) {
  let celsius = (num - 32.0) * 5.0 / 9.0;

  let rounded = Math.round(celsius * 10) / 10;

  // if(celsius == 0.0)
  //   return 0;

  return rounded;
};

const ctof = function(num) {
  let fahrenheit = num * 9.0 / 5.0 + 32.0;

  let rounded = Math.round(fahrenheit * 10) / 10;

  // if(rounded == 0.0)
  //   return 0;

  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
