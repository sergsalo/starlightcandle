document.querySelector('.add-to-cart-button').addEventListener('click', addToCart);
let cart = [];
function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}
function updateCartDisplay() {
    document.querySelector('.cart-count').textContent = cart.length;
}
localStorage.setItem('cart', JSON.stringify(cart));
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    // Update cart icon badge with the number of items
    document.querySelector('.cart-badge').textContent = cart.length;
}
// Initialize the cart as an empty array
let cart = [];

// Function to add items to the cart
function addToCart(item) {
  cart.push(item);
  updateCartDisplay();
}

// Function to update the cart icon display
function updateCartDisplay() {
  // Update the cart badge with the number of items
  document.querySelector('.cart-badge').textContent = cart.length;
}

// Set up the event listener for the Add to Cart button
document.querySelector('.add-to-cart-button').addEventListener('click', function() {
  // For simplicity, let's assume each item has a unique ID
  const newItem = { id: Date.now(), name: "New Item" };
  addToCart(newItem); // Add item to the cart
});
