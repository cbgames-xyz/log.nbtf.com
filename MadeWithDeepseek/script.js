const output = document.getElementById('output');
const messages = [
    "Initializing system...",
    "Loading modules...",
    "Checking dependencies...",
    "Compiling data...",
    "Starting services...",
    "System ready!",
    "Welcome to the terminal."
];

let index = 0;

function typeMessage(message, delay) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < message.length) {
                output.textContent += message[i];
                i++;
            } else {
                clearInterval(interval);
                setTimeout(resolve, delay);
            }
        }, 100); // Adjust typing speed here
    });
}

async function simulateLoading() {
    for (const message of messages) {
        await typeMessage(message + '\n', 1000); // Adjust delay between messages here
    }
}

simulateLoading();