let numberOfGuests = 20;
for (let index = 1; index <= numberOfGuests; index++) {
  console.log("Here is a 🍔 for guest #" + index);
}

// decrement operator
numberOfBurgers = 4;
for (let index = numberOfBurgers; index > 0; index--) {
  console.log("There are " + index + " 🍔 left.");
}

/* initialExpression = This expression typically initializes the loop counter. It runs at the start of a loop. 
                         A very common example is let i = 0. The i variable is short for index, and it's frequently used for the index 
                         counter that you saw above.


    condition = At the end of each loop, the condition expression is evaluated. In the example above, the condition is "if index is less 
                than or equal to the countTo variable." If the value of the condition is true, the loop statement executes.
                If the value of the condition is false, the loop statement terminates. In the example above, index would eventually get to 6.
                 At that point, because the value would be greater than 5, the loop would stop.
                     

    incrementExpression = At the end of each loop, this statement is executed. In the example above, the code is incrementing the variable
             index by 1 (++) each time through the loop. But it's important to note that you're not limited to incrementing by 1 for the 
             final condition. Depending on what you're building or the problem you're solving, you can decrement (i--) 
             by some amount, or you could  increment by another amount, like 2 (index += 2). That said, incrementing by 1 is the most 
             common technique.
              */

let partyPeople = ["Joe", "Julie", "Jasmine", "Julio"];

for (let i = 0; i < partyPeople.length; i++) {
  console.log(partyPeople[i] + " likes to party!");
}

// -  - -- - - - - - //

let totals = [10,20,30,40];
for(let i = 2 ; i < totals.length ; i ++){
console.log(totals[i])
}

//  -       - - - - - - - -- - - - //

