// Load header component when page loads
document.addEventListener('DOMContentLoaded', function () {
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

                // Ensure hover events work on dynamically loaded content
                // Store original color
                const originalColor = this.classList.contains('active') ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';

                tab.addEventListener('mouseenter', function () {
                    this.style.color = '#ffffff';
                    // Add slight scale effect for better feedback
                    this.style.transform = 'scale(1.05)';
                });

                tab.addEventListener('mouseleave', function () {
                    const isActive = this.classList.contains('active');
                    this.style.color = isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';
                    this.style.transform = 'scale(1)';
                });
            });
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Fallback: show text navigation if header fails to load
            document.getElementById('header-container').innerHTML = `
                <header>
    <div class="logo-container">
        <img src="_logo/logo.png" class="logo-image">
    </div>
                    <p class="tagline">minimalistic functional AI</p>
                </header>
                <nav class="tabs">
                    <a href="index.html" class="tab">Home</a>
                    <a href="about.html" class="tab">About</a>
                    <a href="projects.html" class="tab">Projects</a>
                    <a href="contact.html" class="tab">Contact</a>
                </nav>
            `;
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