/*
HW-4; part 3
INTERACTIVE FIBONACCI PRINTING

*/

// // Import readline
var readline = require('readline');
// var exec = require('child_process').exec;
// exec("open -a Terminal .")
var number1 = readline.createInterface(process.stdin, process.stdout);


number1.question("Enter a number of sequence position for the Fibonacci sequence:\n", function(num){
//  link = parseInt(num);
//  num = parseInt(Number(num));
    if (num.toLowerCase().trim() === 'exit'){
        number1.close();
    }
    else{
     link = parseInt(num.trim());

        function fib(link) {
            // console.log(num);
            if (String(link) == 'NaN'){
              return `incalculable. Please enter a number to calculate, not a string.`;
            }
            else if (link === 0){
//              var result = 0;
                return 0;
            }
            else if (link === 1){
//              var result = 1;
                return 1;
            }
            else if (link >= 80){
                return ( `incalculable. ` + link + ` is too large a number. Input must be less than 80.`);
            }
            else{
//              var result = fib(link - 1) + fib(link - 2);
                return (fib(link-1) + fib(link-2));
            }
        };

//        console.log(`final number is ` + result);
        process.stdout.write(`The fibonacci number is ${fib(link)}`);
        console.log(`\nEnter another number or type "exit" to leave:`);
        // number1.setPrompt(`Enter another number to calculate, or type "exit" to leave:`);
        // number1.prompt();
        number1.on('line', function(num2){
          if (num2.toLowerCase().trim() === 'exit'){
              number1.close();
          }
          else{
           link = parseInt(num2.trim());

              function fib(link) {
                  // console.log(num);
                  if (String(link) == 'NaN'){
                    return `incalculable. Please enter a number to calculate, not a string.`;
                  }
                  else if (link === 0) {
      //              var result = 0;
                      return 0;
                  }
                  else if (link === 1) {
      //              var result = 1;
                      return 1;
                  }
                  else if (link >= 80){
                      return ( `incalculable. ` + link + ` is too large a number. Input must be less than 80.`);
                  }
                  else {
      //              var result = fib(link - 1) + fib(link - 2);
                      return (fib(link-1) + fib(link-2));
                  }
              };

      //        console.log(`final number is ` + result);
              process.stdout.write(`The fibonacci number is ${fib(link)}`);
              console.log(`\nEnter another number or type "exit" to leave:`);
            }
          });
        }
    });
number1.on('close', function(){
  console.log(`\n Done!`);
  process.exit();
});
