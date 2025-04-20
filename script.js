
document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const toggleMode = document.getElementById('toggleMode');
    const body = document.body;

    // Load user's preferred mode from localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
    }

    // Bouncing animation on ball click
    ball.addEventListener('click', () => {
        ball.style.animation = 'bounce 0.5s ease-in-out';
        setTimeout(() => {
            ball.style.animation = ''; // Reset animation for re-triggering
        }, 500);
    });

    // Toggle light/dark mode
    toggleMode.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('mode', mode); // Save mode to localStorage
    });
});
