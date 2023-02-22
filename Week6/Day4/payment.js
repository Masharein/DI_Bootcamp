// Get the cart items from local storage
let cartItems = JSON.parse(localStorage.getItem("cart"));

// Find the UL element for the cart items
let cartList = document.getElementById("cart-items");

// Find the span element for the total price
let totalPriceSpan = document.getElementById("total-price");

// Initialize the total price to zero
let totalPrice = 0;

// Display each item in the cart
for (let item of cartItems) {
  // Destructure the item object to get the name and price
  let { name, price, quantity } = item;

  // Add the price to the total
  totalPrice += price * quantity;

  // Create a new LI element for the item
  let li = document.createElement("li");
  li.textContent = `${name} x${quantity} - ${price} each`;

  // Add the LI element to the UL element
  cartList.appendChild(li);
}

// Set the text content of the total price span to the total price
totalPriceSpan.textContent = totalPrice.toFixed(2);

// Add an event listener to the "Submit Payment" button
let submitPaymentButton = document.getElementById("submit-payment");
submitPaymentButton.addEventListener("click", function() {
  // Display a success message
  alert("Payment successful!");

  // Clear the cart items from local storage
  localStorage.removeItem("cart");
});
