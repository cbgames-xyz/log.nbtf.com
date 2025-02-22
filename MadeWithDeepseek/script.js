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
            }, 140); 
        });
    }
    async function simulateLoading() {
        for (const message of messages) {
            await typeMessage("> " + message.text, message.delay); 
 "await typeMessage(message.text + '\n', message.delay);"
        }
    }
    
    simulateLoading();