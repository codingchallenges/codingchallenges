// Calculates the factorial of a number.
function factorial(number) {
  // edge case: if number is zero, return 1
  if(number===0) {
    return 1;
  }
  // edge case: if number is negative, return -1 * factorial of the negative of the number
  if(number < 0) {
    return -1 * factorial(-number);
  }

  // base case: if number is one, return it
  if(number===1) {
    return 1;
  }
  // recursive case: multiply the number by factorial(number-1) and return
  return number * factorial(number-1);
}
