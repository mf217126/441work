/*
HW-4; part 3
INTERACTIVE FIBONACCI PRINTING

*/

// // Import readline
var readline = require('readline');
var number1 = readline.createInterface(process.stdin, process.stdout);

var sequence = {
  num: ''
};
number1.question("Enter a number of sequence position for the Fibonacci sequence:", function(num){
  // var fibb = [number1,number2,number3];
  console.log(num);
  num = Number(num);
  if (typeof num === "number"){
//    for (i=0, i < num, i++){
//    function sequence(){
    // var number1 = 0;
    // var number2 = 1;
    // var i = 0;
//    if (typeof digits === 'number'){
      // for (i=0; i < num; i++){
      //   var number3 = number1+number2;
      //   if (typeof number3 ==="number"){
      //     var number1 = number2;
      //     var number2 = number3;
      //   }
      // }
      // console.log(`final number: ${fibb(process.argv[2])}`)
//    }
    //  else{
    //    console.log('not a number');
    //  }
      function fib(num) {
          // console.log(num);
          if (num === 0) {
            return 0;
          } else if (num === 1) {
            return 1;
          } else {
            return fib(num - 1) + fib(num - 2);
          }
       console.log(`final number is${fib(process.argv[2])}`);

       process.stdout.write(`The fibonacci number is ${process.argv[2]}`);
      };
    }
    else{
      console.log('no number was entered');
      process.exit();
    }
});
//
// // Define the Fibonacci Algorithm Function
//I'm going to try something else first.
// function number(input){
//   var one = process.argv.indexOf(input);
// }
// var digits = number('--Enter-fib-sequence-number');
