// ---- 1st way ----

// 1st way by passing the banner as an argument
let idInterval; 

//first createBanner
function createBanner () {
    const section = document.querySelector("#container");
    const banner = document.createElement("p");
    banner.setAttribute("id", "banner");
    section.appendChild(banner);
    idInterval = setInterval(changeNumber, 1000, banner); //you can pass the banner as an argument
}

createBanner();

let counter = 10;

//change the text of the banner
function changeNumber(bannerPara) {
    if(counter >= 0) {
        bannerPara.textContent = `The sales end in ${counter} sec`;
        counter --;
    } else { 
        clearInterval(idInterval);
    }
}
