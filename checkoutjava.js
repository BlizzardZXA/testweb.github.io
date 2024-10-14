// Function to display cart items in the checkout
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = ''; // Clear previous items
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'checkout-item';
            div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(div);
        });
    }
}

// Handle form submission for checkout
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent normal form submission

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    // Simple validation
    if (!name || !address || !city || !zip) {
        alert('Please fill in all fields.');
        return;
    }

    // Clear cart after successful checkout
    localStorage.removeItem('cartItems');
    alert(`Thank you for your purchase, ${name}!`);

    // Optionally redirect to a confirmation page or reset the form
    this.reset(); // Reset the form if you want
    displayCartItems(); // Update the display to show cart is empty
});

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});