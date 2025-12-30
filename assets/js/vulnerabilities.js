// Toggle dropdown functionality
function toggleDropdown(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    
    // Close all other open dropdowns
    document.querySelectorAll('.vulnerability-content.expanded').forEach(item => {
        if (item.id !== id) {
            item.classList.remove('expanded');
            item.previousElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current
    content.classList.toggle('expanded');
    header.classList.toggle('active');
}

// Load on page ready
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Open first vulnerability by default
    // const firstVuln = document.querySelector('.vulnerability-item:first-child .vulnerability-content');
    // if (firstVuln) {
    //     firstVuln.classList.add('expanded');
    //     firstVuln.previousElementSibling.classList.add('active');
    // }
});
