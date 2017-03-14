# Homework 4 Response
In this homework I used js in node.js to print stuff to the console, I allowed users to input information using flags in anoter js, and finally created a calculator to calculate parts of the fibonacci sequence under the value of 80.
## Part 1: PRINTING
This part was easy. I was able to print some words using console.log().
## Part 2: FLAGS PRINTING
This part was also fairly easy. I used indexing to define flags and process.argv to allow the user to see a message that was typed. I used console.log so they could view it. I made flags --fictional-char and --chars-fave-color for user input.
## Part 3: FIBONACCI SEQUENCE
This part was fairly difficult. It took me a while to figure out what was wrong with it, which ended up being the fact that I was calling the wrong thing when I went to print the answer. I finally figured out I had to call the fibonacci function in my console log in order for it to work rather than something else. Most of the time, I thought the program was reading none of my inputs as numbers. but then I found out it was the way I was trying to print it that was wrong. It also took me a bit to figure out the "on." loop thing so that it would work for all inputs. Originally I had the if NaN and >80 statements outside the fibonacci function, but then I discovered it was much smoother if I put them inside of it, and it also used up less code and allowed me to let the user go again after they inserted the incorrect input....:P
I used stdin and stdout in the readline.
