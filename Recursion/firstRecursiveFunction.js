//two important parts of Recursion: //
//1) base case
//2)different input on call of funcn

//naive function
function countDown(num) {
  for (i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done");
}

//Recursive function
function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
