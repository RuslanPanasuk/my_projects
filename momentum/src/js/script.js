const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function setLocalStorage() {
    localStorage.setItem('userName', userName.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('userName')) {
        userName.value = localStorage.getItem('userName');
    }
}
window.addEventListener('load', getLocalStorage)



function getTimeOfDay() {
    const dateValue = new Date();
    const currentHours = dateValue.getHours();
    switch (true) {
        case currentHours < 6:
        case currentHours > 23:
            return "Night";
        case currentHours > 17:
            return "Evening";
            case currentHours > 11:
                return "Day";
        case currentHours > 5:
            return "Morning"; 
    }
}

function showGreeting() {    
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

function showDate() {
    const dateValue = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = dateValue.toLocaleDateString('en-US', options);
    date.textContent = currentDate;
}

function showTime() {
    const dateValue = new Date();
    const currentTime = dateValue.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);    
}
showTime();

