// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = ''; // Clear previous items
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(div);
        });
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cartItems'); // Remove cartItems from local storage
    displayCartItems(); // Update the display
    alert('Your cart has been cleared.'); // Alert confirmation
}

// Event listener for Clear Cart button
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems(); // Call the function to display cart items
});