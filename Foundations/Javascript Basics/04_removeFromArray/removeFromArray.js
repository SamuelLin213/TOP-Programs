const removeFromArray = function(arr) {
  let numArg = arguments.length;
  let newArr = arr;
  for(let x = newArr.length -1 ; x >= 0; x--)
  {
    for(let y = 0; y < numArg; y++)
    {
      if(newArr[x] === arguments[y])
      {
        newArr.splice(x, 1);
      }
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
