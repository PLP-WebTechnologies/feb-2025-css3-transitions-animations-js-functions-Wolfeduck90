document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('toggleMode');
    const body = document.body;
    const mouse = document.getElementById('mouse');

    // Check if localStorage has a saved mode
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
    }

    // Toggle light/dark mode and animate the mouse
    toggleMode.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('mode', mode); // Save mode to localStorage

        // Animate mouse across the screen
        mouse.style.display = 'block'; // Ensure it's visible
        mouse.style.transition = 'left 1s ease-in-out'; // Smooth transition effect
        mouse.style.left = '100%'; // Move to the right side of the screen

        // Reset mouse after animation
        setTimeout(() => {
            mouse.style.left = '-100px'; // Reset to starting position off-screen
        }, 1000); // Reset after animation finishes
    });
});
