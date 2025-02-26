const output = document.getElementById('output');
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
        }, 140); // Typing speed
    });
}

async function simulateLoading() {
    for (const message of messages) {
        await typeMessage("> " + message.text + '\n', message.delay);
        // Automatically scroll to the bottom after each message
        output.parentElement.scrollTop = output.parentElement.scrollHeight;
    }
}

simulateLoading();