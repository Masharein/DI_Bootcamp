// Exercise : Create a shopping List
// Create an HTML file
// Create a JS file - Add the below array of objects inside your javascript file.
// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// MANDATORY --> add to each item an id and a class attribute.
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage.
// Each item is an object containing the name of the product and the price.
// For now, the user can add only 1 product per category (meaning 1 scooter, 1 bicycle ect...)
// Bonus: use a Class to create each item
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an tag) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display :
// all the items that the user bought : MANDATORY --> use object destructuring
// the total price he needs to pay
// a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
// Bonus: the user can add multiple times, the same product. --> Each product item will be an object containing the name of the product, the price and the quantity.
// const  products = [
//     {
//         id: 0,
//         name: "Deluxe Bicycle",
//         url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
//         price: 499.98
//     },
//     {
//         id: 1,
//         name: "Super Deluxe bagpack",
//         url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg"
//         price: 134.99
//     },
//     {
//         id: 2,
//         name: "Super Duper Scooter",
//         url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg"
//         price: 1090.95
//     },
//     {
//         id: 3,
//         name: "Smartphone",
//         url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg"
//         price: 399.99
//     }
// ];

// Define product class
class Product {
    constructor(id, name, url, price) {
      this.id = id;
      this.name = name;
      this.url = url;
      this.price = price;
    }
  }
  
  // Define product array
  const products = [
    new Product(0, "Deluxe Bicycle", "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg", 499.98),
    new Product(1, "Super Deluxe bagpack", "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg", 134.99),
    new Product(2, "Super Duper Scooter", "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg", 1090.95),
    new Product(3, "Smartphone", "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg", 399.99)
  ];
  
  // Display products in the DOM
  (function () {
    const container = document.getElementById("product-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.id = `product-${product.id}`;
      const img = document.createElement("img");
      img.src = product.url;
      img.alt = product.name;
      const name = document.createElement("p");
      name.textContent = product.name;
      const price = document.createElement("p");
      price.textContent = `$${product.price.toFixed(2)}`;
      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(price);
      container.appendChild(div);
  
      // add event listener to each product
      div.addEventListener("click", () => {
        // check if product already exists in cart
        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
          // if product already exists, update its quantity
          alert("You can add only one product")
        } else {
          // if product doesn't exist, add it to cart
          cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        }
        // save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });
  })();
  
  // Add event listener to pay button to redirect to payment page
  const payBtn = document.getElementById("pay-btn");
  payBtn.addEventListener("click", () => {
    window.location.href = "payment.html";
  });
  