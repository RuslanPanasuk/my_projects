const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.userName');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum = 0;

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


function getRandomNum() {
    randomNum = Math.floor(1 + Math.random() * 20);
    return randomNum;
}

function setBg() {
    const timeOfDay = getTimeOfDay().toLowerCase();
    const bgNum = randomNum.toString().padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/RuslanPanasuk/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`; 
    img.onload = () => {      
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/RuslanPanasuk/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
    };
}
window.addEventListener('load', setBg)

function getSlideNext() {
    if (randomNum === 20) {
        randomNum = 1;
    } else {        
        randomNum = randomNum + 1;
    }
    setBg();
}

function getSlidePrev() {
    if (randomNum === 1) {
        randomNum = 20;
    } else {        
        randomNum = randomNum - 1;
    }
    setBg();
}

slideNext.addEventListener('click', getSlideNext)

slidePrev.addEventListener('click', getSlidePrev)

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
                return "Afternoon";
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
getRandomNum();

