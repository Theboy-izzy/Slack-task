// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current day of the week
    function updateCurrentDayOfTheWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getUTCDay()];
        const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        dayElement.textContent = `Today is ${currentDay}`;
    }

    // Function to update the current time in milliseconds
    function updateCurrentTime() {
        setInterval(() => {
            const currentUTCTime = Date.now();
            const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
            timeElement.textContent = `Current Time (milliseconds): ${currentUTCTime}`;
        }, 1); // Update every millisecond
    }

    // Add an animation to the box on hover
    const animatedBox = document.querySelector('[data-testid="animatedBox"]');
    animatedBox.addEventListener('mouseover', () => {
        animatedBox.style.transform = 'scale(1.2)';
        animatedBox.style.backgroundColor = getRandomColor();
    });

    animatedBox.addEventListener('mouseout', () => {
        animatedBox.style.transform = 'scale(1)';
    });

    // Call the functions to update content and add interactivity
    updateCurrentDayOfTheWeek();
    updateCurrentTime();
});
