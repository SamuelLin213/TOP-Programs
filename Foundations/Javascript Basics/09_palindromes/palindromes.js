const palindromes = function (str) {
  let end = str.length - 1;
  str = str.toLowerCase();
  for(let x = 0; x < str.length/2; x++)
  {
    while(!(str.charAt(x).match(/[a-zA-Z]/)))
    {
      x++;
    }
    while(!(str.charAt(end).match(/[a-zA-Z]/)))
    {
      end--;
    }
    if(str.charAt(x) != str.charAt(end))
      return false;

    console.log(str.charAt(x) + ' equals ' + str.charAt(end))
    end -= 1;

    if(end <= x)
      break;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
