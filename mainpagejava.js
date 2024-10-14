// Load cart items from local storage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    // Ask for confirmation
    const confirmation = confirm(`Do you want to add ${itemName} for $${itemPrice.toFixed(2)} to your cart?`);

    if (confirmation) {
        cartItems.push({ name: itemName, price: itemPrice });
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save to local storage
        updateCartCount();
        alert(`${itemName} has been added to your cart!`); // Alert confirmation
    } else {
        alert(`${itemName} was not added to your cart.`); // Alert cancellation
    }
}

// Event listeners for Add to Cart buttons
document.addEventListener('DOMContentLoaded', function () {
    // Set up event listeners for buttons with data attributes
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item-name');
            const itemPrice = parseFloat(this.getAttribute('data-item-price'));
            addToCart(itemName, itemPrice);
        });
    });

    // Initialize cart count on page load
    updateCartCount();
});

// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItems.length; // Update cart count in the UI
}