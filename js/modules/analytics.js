document.addEventListener('DOMContentLoaded', function() {
    // Simple page view tracking
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_title': document.title,
            'page_path': window.location.pathname
        });
    }
    
    // Track outbound links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            if (url.includes(window.location.hostname)) return;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'outbound',
                    'event_label': url,
                    'transport_type': 'beacon'
                });
            }
        });
    });
});
