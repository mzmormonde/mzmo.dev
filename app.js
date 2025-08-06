// Theme toggle functionality
const buttons = document.querySelectorAll('.backgroundButton');
const body = document.querySelector('body');
const head = document.getElementsByTagName('HEAD')[0];

// Create new link Element for theme switching
const link = document.createElement('link');
let count = 0;

console.log("Well, hello there. If you're looking for some info," +
    " check out my readme:  ");
console.log('https://github.com/mzmormonde/mzmo.dev/blob/main/README.md#-welcome-');
console.log("Or, check out my resume here: ");
console.log('https://docs.google.com/document/d/1Z9cJ0gpnJsqVhCGAhxxTQAAqLL3RO7UIr34wirixSqI/edit?usp=sharing');

// Theme toggle event listeners
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'opposite') {
            try {
                if (count % 2 === 0) {
                    // Switch to light theme
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = 'reverse.css';
                    
                    // Update button icon
                    e.target.innerHTML = '🌙';
                } else {
                    // Switch to dark theme
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = 'style.css';
                    
                    // Update button icon
                    e.target.innerHTML = '☀️';
                }
                
                // Append link element to HTML head
                head.appendChild(link);
                count++;
            } catch (error) {
                console.error('Error switching theme:', error);
            }
        }
    });
});

// Mobile navigation toggle
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });
    
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
});

// Smooth scrolling for navigation links
$('.nav-link').click(function (e) {
    e.preventDefault();
    const divId = $(this).attr('href');
    
    if (divId && divId !== '#') {
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 300
        }, 200);
    }
});

// Project navigation with error handling
document.addEventListener('DOMContentLoaded', function() {
    const matchGameLink = document.getElementById("matchGameLink");
    const higherLowerLink = document.getElementById("higherLowerLink");
    
    if (matchGameLink) {
        matchGameLink.addEventListener('click', function() {
            try {
                window.location.href = "Pages/MatchGame/index.html";
            } catch (error) {
                console.error('Error navigating to Match Game:', error);
            }
        });
    }
    
    if (higherLowerLink) {
        higherLowerLink.addEventListener('click', function() {
            try {
                window.location.href = "Pages/HigherLower/index.html";
            } catch (error) {
                console.error('Error navigating to Higher/Lower Game:', error);
            }
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll-based navbar styling
const navbar = document.querySelector('.navbar');
if (navbar) {
    const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
}

// Add loading states for better UX
function addLoadingState(element) {
    if (element) {
        element.style.opacity = '0.7';
        element.style.pointerEvents = 'none';
    }
}

function removeLoadingState(element) {
    if (element) {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
}

// Enhanced project navigation with loading states
function navigateToProject(url, linkElement) {
    addLoadingState(linkElement);
    
    setTimeout(() => {
        try {
            window.location.href = url;
        } catch (error) {
            console.error('Navigation error:', error);
            removeLoadingState(linkElement);
        }
    }, 100);
}

// Re-export for backward compatibility
window.navigateToProject = navigateToProject; 




