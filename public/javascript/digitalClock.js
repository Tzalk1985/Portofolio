const hoursContainer = document.querySelector('.hours');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');
const tickElements = Array.from(document.querySelectorAll('.tick'));

let lastTime = new Date(0);
lastTime.setHours(0); // Set to -1 to ensure it doesn't match the local time initially

function updateContainer(container, value) {
    container.textContent = value.padStart(2, '0');
}

function updateTime() {
    const now = new Date();

    const currentHours = now.getHours().toString(); // Local hours
    const currentMinutes = now.getMinutes().toString(); // Local minutes
    const currentSeconds = now.getSeconds().toString(); // Local seconds

    if (lastTime.getHours() !== now.getHours()) {
        updateContainer(hoursContainer, currentHours);
    }

    if (lastTime.getMinutes() !== now.getMinutes()) {
        updateContainer(minutesContainer, currentMinutes);
    }

    if (lastTime.getSeconds() !== now.getSeconds()) {
        updateContainer(secondsContainer, currentSeconds);
    }

    lastTime = now;
}

// Call updateTime at a regular interval (e.g., every second)
setInterval(updateTime, 1000);