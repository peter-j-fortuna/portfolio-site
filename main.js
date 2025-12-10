// main.js

// Global pages object - page files will add to this
const pages = {};

// Store main page content
let mainPageContent = '';

// Navigate to subpage
function goToPage(pageName) {
    const mainContent = document.getElementById('main-content');
    
    if (!mainPageContent) {
        mainPageContent = mainContent.innerHTML;
    }
    
    if (pages[pageName]) {
        mainContent.innerHTML = pages[pageName];
        window.scrollTo(0, 0);
    }
}

// Go back to main page
function goBack() {
    document.getElementById('main-content').innerHTML = mainPageContent;
    window.scrollTo(0, 0);
}

// Random greeting on page load
const greetings = [
    "Hi there!",
    "Hej hej!",
    "Olá!",
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById('greeting').textContent = randomGreeting;

// Search button handler
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const query = document.getElementById('myInput').value;
        console.log('Searching for:', query);
    });
}
