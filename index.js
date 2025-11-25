function changeGreeting() {
    const greeting = document.getElementById('greeting');
    if (greeting.textContent === 'Hello, World!') {
        greeting.textContent = 'Привет, мир!';
    } else {
        greeting.textContent = 'Hello, World!';
    }
}