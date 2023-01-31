// ---- 2nd way ----

// 2nd way by passing the banner as an argument
let idIntervalOther; 

//first createBanner
function createBannerOther () {
    const section = document.querySelector("#container");
    const banner = document.createElement("p");
    banner.setAttribute("id", "banner");
    section.appendChild(banner);
    idIntervalOther = setInterval(changeNumberOther, 1000);
}

createBannerOther();

let counterOther = 10;

//change the text of the banner
function changeNumberOther() {
    if(counterOther >= 0) {
        const bannerParagraph = document.querySelector("#banner");
        bannerParagraph.textContent = `The sales end in ${counterOther} sec`;
        counterOther --;
    } else { 
        clearInterval(idIntervalOther);
    }
}