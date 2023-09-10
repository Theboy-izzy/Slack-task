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

    // Function to update the current UTC time in milliseconds
    function updateCurrentUTCTime() {
        setInterval(() => {
            const currentUTCTime = Date.now();
            const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
            timeElement.textContent = `Current UTC Time (milliseconds): ${currentUTCTime}`;
        }, 1000); // Update every second
    }

    // 

    // Call the functions to update content and add interactivity
    updateCurrentDayOfTheWeek();
    updateCurrentUTCTime();
});
