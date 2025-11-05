/* --- WhatsApp Order Function --- */
function sendWhatsAppOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const selectElement = document.getElementById('menu-select');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const menuItem = selectedOption.value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value.trim();

    // Basic validation
    if (!name || !menuItem || !quantity || !address || menuItem === "") {
        alert('Please fill the given columns');
        return; 
    }

    // Get the price for calculation
    const pricePerUnit = parseFloat(selectedOption.getAttribute('data-price'));
    const totalAmount = pricePerUnit * parseInt(quantity);
    const formattedTotal = isNaN(totalAmount) ? 'N/A (Please confirm price)' : `₹${totalAmount.toFixed(0)}`;


    // Your WhatsApp number (9130062555)
    const phoneNumber = '9130062555';

    // The message text structure
    const message = `
*🎉 NEW ORDER FOR SAVOURELLE BY KHUSHI 🎉*

*Customer Details:*
👤 Name: ${name}
📍 Delivery Address: ${address}

*Order Details:*
🥣 Item: ${menuItem}
🔢 Quantity: ${quantity}
💰 Estimated Total: ${formattedTotal}
---
Please confirm the total amount and delivery details. Thank you!
    `.trim();

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Generate the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp link
    window.open(whatsappUrl, '_blank');
}


/* --- Mobile Sidebar Toggle Logic --- */

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.getElementById('mobile-sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // 1. Toggle Button functionality
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            toggleButton.classList.toggle('active'); 
        });
    }

    // 2. Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if sidebar is open before trying to close
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                toggleButton.classList.remove('active');
            }
        });
    });
});