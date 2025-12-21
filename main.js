// Random greeting on page load
const greetings = [
    "Hi there!",
    "Hej hej!",
    "Olá!",
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById('greeting').textContent = randomGreeting;
