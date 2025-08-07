// Load header component when page loads
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            
            // Set active tab based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                const href = tab.getAttribute('href');
                if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
                    tab.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});

function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}