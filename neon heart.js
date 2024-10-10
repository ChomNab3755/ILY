// Get elements by their IDs
const heart = document.getElementById('heart');
const text = document.getElementById('text');

// Function to toggle the glow intensity
function toggleGlow(event) {
    const element = event.target;

    // If the element already has the "glow" class, remove it to reduce the glow
    if (element.style.boxShadow || element.style.textShadow) {
        element.style.boxShadow = '';
        element.style.textShadow = '';
    } else {
        // Add a more intense glow when clicked
        if (element === heart) {
            element.style.boxShadow = '0 0 30px #ff00ff, 0 0 50px #ff00ff, 0 0 70px #ff00ff';
        } else if (element === text) {
            element.style.textShadow = '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff';
        }
    }
}

// Add event listeners to the heart and text for click/tap interaction
heart.addEventListener('click', toggleGlow);
text.addEventListener('click', toggleGlow);
