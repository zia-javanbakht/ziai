// Load header component when page loads
document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;

            // Add hover events to dynamically loaded tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('mouseenter', function () {
                    this.style.color = '#ffffff';
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
            // Fallback: show button navigation if header fails to load
            document.getElementById('header-container').innerHTML = `
                <header>
    <div class="logo-container">
        <img src="logo/logo.png" class="logo-image">
    </div>
                    <p class="tagline">minimalistic functional AI</p>
                </header>
                <nav class="tabs">
                    <button class="tab active" onclick="showTab('home')">Home</button>
                    <button class="tab" onclick="showTab('about')">About</button>
                    <button class="tab" onclick="showTab('projects')">Projects</button>
                    <button class="tab" onclick="showTab('contact')">Contact</button>
                </nav>
            `;
        });
});

function showTab(tabName, clickedElement) {
    // Remove active class from all tabs immediately
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to clicked tab immediately
    if (clickedElement) {
        clickedElement.classList.add('active');
    }

    // Hide current active content first
    const currentActive = document.querySelector('.tab-content.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    // Show new content after a tiny delay to ensure smooth transition
    setTimeout(() => {
        const targetContent = document.getElementById(tabName);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }, 10);
}