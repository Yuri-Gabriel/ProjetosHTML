const atualDay = (new Date()).getDate();
let atualMonth = (new Date()).getMonth() + 1;
atualMonth = atualMonth.toString().length > 1 ? atualMonth : '0' + atualMonth;
const atualYear = (new Date()).getFullYear();
document.querySelector("#dateTimeUser").setAttribute(
    "min", `${atualYear}-${atualMonth}-${atualDay}`
)

var DateLeftInterval;
var lblDays = getHTMLElement("#lblDays");

if (lblDays.innerHTML.trim() != "00") {
    getHTMLElement('section').style.display = "none";
} else {
    getHTMLElement('section').style.display = "flex";
    getHTMLElement('section').classList.add('active');
}

getHTMLElement("#startCont").addEventListener("click", () => {
    const dateUser = getHTMLElement("#dateTimeUser").value;
    const atualDate = `${atualDay}/${atualMonth}/${atualYear} 00:00:00`;
    if (dateUser) {
        getHTMLElement('section').style.display = "none";
        DateLeftInterval = setInterval(() => {
            const timeLeft = getTimeLeft(dateUser, atualDate);
            getHTMLElement("#lblDays").innerHTML = timeLeft.days;
            getHTMLElement("#lblHours").innerHTML = timeLeft.hours;
            getHTMLElement("#lblMinutes").innerHTML = timeLeft.minutes;
            getHTMLElement("#lblSeconds").innerHTML = timeLeft.seconds;
        }, 1000);
    }
});

getHTMLElement("#RestartBtn").addEventListener("click", () => {
    clearInterval(DateLeftInterval);
    getHTMLElement('section').style.display = "flex";
    getHTMLElement("#lblDays").innerHTML = "00";
    getHTMLElement("#lblHours").innerHTML = "00";
    getHTMLElement("#lblMinutes").innerHTML = "00";
    getHTMLElement("#lblSeconds").innerHTML = "00";
});

function getTimeLeft(dateUser, atualDate) {
    const date = new Date()
    const user = `${dateUser.slice(8, 10)}/${dateUser.slice(5, 7)}/${dateUser.slice(0, 4)} 00:00:00`;
    const daysLeft = parseInt(getIntervalInDates(atualDate, user)) * -1;
    const hoursLeft = 24 - parseInt(date.getHours());
    const minutesLeft = 60 - parseInt(date.getMinutes());
    const secondsLeft = 60 - parseInt(date.getSeconds());
    return {
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft
    };
}

function getHTMLElement(selector) {
    return document.querySelector(selector);
}

function getIntervalInDates(dateStart, dateEnd) {
    const diff = moment(dateStart, "DD/MM/YYYY HH:mm:ss").diff(moment(dateEnd, "DD/MM/YYYY HH:mm:ss"));
    const days = moment.duration(diff).asDays();
    return days;
}