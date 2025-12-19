function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const darkIcon = document.getElementById('darkIcon');
    const lightIcon = document.getElementById('lightIcon');
    
    if (newTheme === 'light') {
        darkIcon.classList.add('active');
        lightIcon.classList.remove('active');
    } else {
        darkIcon.classList.remove('active');
        lightIcon.classList.add('active');
    }
}

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Initialize theme icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (savedTheme === 'light') {
        const darkIcon = document.getElementById('darkIcon');
        const lightIcon = document.getElementById('lightIcon');
        if (darkIcon && lightIcon) {
            darkIcon.classList.add('active');
            lightIcon.classList.remove('active');
        }
    }
});

