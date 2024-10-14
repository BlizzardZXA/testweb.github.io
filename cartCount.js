// Function to update cart count on all pages
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartCountElement.textContent = cartItems.length; // Update cart count in the UI
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount(); // Call the function to set the initial cart count
});
