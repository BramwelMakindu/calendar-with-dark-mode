const currentDate = document.querySelector('.current-date');
const daysEl = document.querySelector('.days');
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = ["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"]

function changeDate() {
    let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateOfTheMonth = new Date(currentYear, currentMonth, lastDay).getDay();
    let lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();


    let days = '';

    for(let i = firstDay; i > 0; i--){
        days += `<div class = "inactive">${lastDayOfLastMonth - i + 1}</div>`;
    }
   
    for (let i = 1; i <= lastDay; i++) {
        let today = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        days += `<div class = "${today}">${i}</div>`;
    }

    for(let i = lastDateOfTheMonth; i < 6; i++) {
        days += `<div class = "inactive">${i - lastDateOfTheMonth + 1}</div>`;
    }

    daysEl.innerHTML = days;

    currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`
}
changeDate();

prevEl.addEventListener('click', () => {
    currentMonth--;
    changeDate(); 
    if (currentMonth < 0) {
        date = new Date(currentYear, currentMonth)
        currentYear = date.getFullYear();
        currentMonth = date.getMonth();
    } else {
        date = new Date();
    }
});

nextEl.addEventListener('click', () => {
    currentMonth++;
    changeDate();
    if (currentMonth > 11) {
        date = new Date(currentYear, currentMonth)
        currentYear = date.getFullYear();
        currentMonth = date.getMonth();
    } else {
        date = new Date();
    }
});


/*-----for dark mode----*/

const toggle = document.querySelector('.toggle');
const items = document.querySelectorAll('.body,.toggle-ball,.container,.header,.week,.days');

toggle.addEventListener('click', () => {
    items.forEach((item) => {
        item.classList.toggle('dark');
    });
    toggle.classList.toggle('dark');
});