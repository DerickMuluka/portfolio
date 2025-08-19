document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;
    
    if (themeSwitcher) {
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.classList.toggle('dark-theme', currentTheme === 'dark');
        
        // Update switch position
        themeSwitcher.checked = currentTheme === 'dark';
        
        // Theme switcher event
        themeSwitcher.addEventListener('change', function() {
            const newTheme = this.checked ? 'dark' : 'light';
            body.classList.toggle('dark-theme', this.checked);
            localStorage.setItem('theme', newTheme);
        });
    }
});

