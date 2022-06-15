const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	// const sum = 0;
	// for(const x of arr)
	// {
	// 	sum += x;
	// }
	// return sum;
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
	return arr.length > 0 ? arr.reduce((sum, num) => sum * num) : 0; //don't want initial value: 0 * n = 0
};

const power = function(base, expo) {
	let sum = 1;
	for(let x = 0; x < expo; x++)
	{
		sum *= base;
	}
	return sum;
};

const factorial = function(num) {
	if(num === 0)
	{
		return 1;
	}
	return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
