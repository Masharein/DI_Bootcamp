function playTheGame() {
   let userAnswer = confirm('Do you want play Game?');
   if (userAnswer !== true) {
       alert('no problem, see you next time!');
       return;
   } 
   let userNumber = prompt('Give number from 0 to 10');
   if (isNaN(userNumber) || userNumber < 0 || userNumber > 10 || userNumber === null) {
           if(isNaN(userNumber)) {
               alert('Sorry, Bye!')
           } else if (typeof userNumber === 'string') {
               alert('Sorry, it is not a number, bye!')
           }
           return;
       }
   let computerNumber = Math.round(Math.random() * 11);
   console.log('User Number:', userNumber);
   console.log('Computer Number:', computerNumber);


   // Part 2
   let chances = 3;
   while(chances > 0) {
       compareNumbers(userNumber, computerNumber);
       if (userNumber == computerNumber) {
           return;
       }
       chances--;
       userNumber = prompt('enter another number');
   }
   alert('out of chances');
}

function compareNumbers(userNumber, computerNumber) {
   if (userNumber == computerNumber) {
       alert('WINNER')
   } else if (userNumber > computerNumber) {
       alert('Your number is bigger then the computer’s, guess again')
   }
   else if (userNumber < computerNumber) {
       alert('Your number is smaller then the computer’s, guess again')
   }
}

playTheGame();