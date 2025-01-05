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
