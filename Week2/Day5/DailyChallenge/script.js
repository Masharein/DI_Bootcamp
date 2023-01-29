// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================



// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

function singSong() {
    let bottles = prompt("Enter a number to begin counting down bottles:");
    let subtractedNum = 1;
  
    for (let i = bottles; i >= 0; i--) {
      if (bottles === 1) {
        console.log(`${bottles} bottle of beer on the wall`);
        console.log(`${bottles} bottle of beer`);
        console.log(`Take ${subtractedNum} down, pass it around`);
      } else if (bottles === 0) {
        console.log("No bottles of beer on the wall");
      } else {
        console.log(`${bottles} bottles of beer on the wall`);
        console.log(`${bottles} bottles of beer`);
        console.log(`Take ${subtractedNum} down, pass them around`);
      }
      console.log(`${bottles - 1} bottles of beer on the wall`);
      console.log(" ");
      bottles--;
      subtractedNum++;
    }
  }
  singSong();
  





 
 

 
