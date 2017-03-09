/*
HW-4; part 2
SHELL VARIABLE PRINTING

Directions: Write an application that can parse input variables supplied with the node call and print these to the console. This app should be capable of discarding flags (i.e. `-f` and/or `--flag`) and only printing the proceeding variables, each on their own line.

Furthermore, your app should be looking for a "message" flag signified by "`-m`". The value following this flag should be printed last, regardless of where it comes in the input variable sequence and should have a blank line above it.

When I test this app, I will include a number of values proceeded by flags (i.e. `--flag "some value"`).


*/
//The "flag" part of the app.
//Puts user inputs into an array.
function indexing(input){
  var arr = process.argv.indexOf(input);
  return (arr === -1) ? null : process.argv[++arr];
}

var character = indexing('--fictional-char');
var color = indexing('--chars-fave-color');

//Had to test if I needed to call the variables first, but I don't
//character;
//color;

if (!character || !color){
  console.log("wrong input");
}
else {
  console.log(`${character} is a great character! ${character}'s favorite color is ${color}.`);
}
