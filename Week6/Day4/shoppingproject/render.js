const spantotal = document.getElementById("total");
const section = document.getElementById("container");

(() => {
    let total = 0;
    //retrieve everything from loal storage
    const allProducts = JSON.parse(localStorage.getItem('cart'));

    allProducts.forEach(({nameProduct, priceProduct}) => { //obj destructuring in parameters
        total += priceProduct;
        const div = document.createElement("div");
        const pname = document.createElement("p");
        const pprice = document.createElement("p");
        div.classList.add("product");

        const tname = document.createTextNode(nameProduct);
        const tprice = document.createTextNode(`${priceProduct}$`);

        pname.appendChild(tname);
        pprice.appendChild(tprice);

        div.append(pname, pprice);
        section.appendChild(div);
    })
    spantotal.textContent = ` ${total}$`;
})()

const btnsubmit = document.getElementById("submit");
btnsubmit.addEventListener("click", deleteAll);

function deleteAll () {
    console.log("test");
    //delete all for localstorage
    localStorage.clear();
    section.textContent = "";
    spantotal.textContent = ` --- No orders yet ----`;
}