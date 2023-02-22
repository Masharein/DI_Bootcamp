const products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];

(() => {
    const section = document.getElementById("container");
    //append on the page
    products.forEach(({id, name, url, price}) => { //obj destructuring in parameters

        // const {id, name, url, price} = item; //same as here

        const div = document.createElement("div");
        const pname = document.createElement("p");
        const pprice = document.createElement("p");
        const image = document.createElement("img");

        div.id = id;
        div.classList.add("product");

        const tname = document.createTextNode(name);
        const tprice = document.createTextNode(`${price}$`);
        image.src = url;

        pname.appendChild(tname);
        pprice.appendChild(tprice);

        div.addEventListener("click", addToCart)
        div.append(pname, pprice, image);
        section.appendChild(div);
    })
})()

const cart = JSON.parse(localStorage.getItem("cart")) || []; //trick
// if the localstorage is not empty (meaning the user already added products to the local storage)
// the cart variable should be equal to whatever is in the local storage
// if the localstorage is empty (meaning the user just arrived on the page)
// the cart variable should be initialized as an emoty array

function addToCart (event) {
    const idcurrentTarget = event.currentTarget.id;
    //The find() method returns the first element in 
    //the provided array that satisfies the provided testing function.
    const correctProduct = products.find(elem => elem["id"] === Number(idcurrentTarget));
    const newObj = {
        nameProduct : correctProduct["name"],
        priceProduct : correctProduct["price"]
    }
    cart.push(newObj) //array of objects
    localStorage.setItem('cart', JSON.stringify(cart));
}