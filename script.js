// ==============================================
// 1. MOBILE MENU TOGGLE FUNCTION
// ==============================================
function toggleMenu() {
    // Select the nav-links container
    const menu = document.getElementById("navLinks");
    
    // Toggle the 'active' class (defined in CSS)
    // This switches display from 'none' to 'flex'
    menu.classList.toggle("active");
}

// ==============================================
// 2. SCROLL REVEAL ANIMATION
// ==============================================

// Listen for the scroll event on the browser window
window.addEventListener('scroll', reveal);

function reveal() {
    // Select all elements with the 'reveal' class
    var reveals = document.querySelectorAll('.reveal');

    // Loop through each element to check its position
    for (var i = 0; i < reveals.length; i++) {
        
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Trigger animation 150px from bottom

        // If the element is within the viewport
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } 
        // Optional: Remove 'else' block if you want elements to stay visible once revealed
        else {
            reveals[i].classList.remove('active');
        }
    }
}

// Run the function once on load to show elements that are already visible (like the Hero section)
reveal();
