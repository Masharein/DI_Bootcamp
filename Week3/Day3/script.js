const saleDiv = document.body.firstElementChild
setTimeout(createBanner, 2000)
function createBanner () {
    saleDiv.classList.toggle("none");
}

// let counter = 10;
// const idInterval = setInterval(changeNumber, 5000);
// function changeNumber{
//     counter --;
//     if(counter >= 0){
//         console.log('The sales end in ' + counter +'sec');
//     } else {
//         clearInterval(idInterval); //clear the interval from the memory
//     }
// }


// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 9sec ! "

// etc ... until 0

// If you need help for this exercise, look at the 1st video of this tutorial