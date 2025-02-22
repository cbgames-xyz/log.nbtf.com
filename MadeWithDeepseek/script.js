    const output = document.getElementById('output');
    const messages = [
        { text: "Initializing system...", delay: 1000 }, // 1 second delay
        { text: "Loading modules...", delay: 1500 },     // 1.5 seconds delay
        { text: "Starting services...", delay: 3000 },   // 3 seconds delay
        { text: "System ready!", delay: 1000 },          // 1 second delay
        { text: "Welcome to the terminal.", delay: 500 }, // 0.5 seconds delay
        { text: "Waiting for Input", delay: 700},
        { text: ".....................................................................", delay: 2000},
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
            await typeMessage(message.text + '\n', message.delay); // Use individual delay for each message
        }
    }
    
    simulateLoading();