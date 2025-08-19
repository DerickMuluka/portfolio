// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Initialize modules
    if (typeof initNavigation === 'function') initNavigation();
    if (typeof initAnimations === 'function') initAnimations();
    if (typeof initForm === 'function') initForm();
    if (typeof initCharts === 'function') initCharts();
});
