const fibonacci = function(num) {
  if(num < 1)
  {
    return "OOPS";
  }

  if(num === 1 || num === 2)
  {
    return 1;
  }
  else{
    let first = 1;
    let second = 1;
    for(let x = 2; x < num; x++)
    {
      let temp = second;
      second += first;
      first = temp;
    }
    return second;
  }
};

// Do not edit below this line
module.exports = fibonacci;
