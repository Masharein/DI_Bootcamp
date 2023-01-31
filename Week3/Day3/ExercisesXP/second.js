// 🌟 Exercise 2 : Move The Box
// Instructions
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

    function myMove() {
    let pos = 0;
    const elem = document.querySelector('#animate');
    id = setInterval(frame, 1)
    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.right = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

