function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(12);

//.................Factorial Example.................//

function factorial(num) {
  let total = 1;
  for (i = num; i > 0; i--) {
    total *= num;
  }
  return total;
}

/*Using Recursion */
function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}
