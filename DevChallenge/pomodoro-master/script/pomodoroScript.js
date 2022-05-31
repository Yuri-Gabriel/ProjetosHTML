const Trabalho = localStorage.getItem("Trabalho");
const Pausa = localStorage.getItem("Pausa");
const Sessoes = localStorage.getItem("Sessoes");
var pauseTime = false;
var userPaused = false;


if (!Trabalho || !Pausa || !Sessoes) {
    returnToStart();
}
var minutes = Trabalho;
var seconds = 0;
const timer = setInterval(() => {
    if (!userPaused) {
        if (!pauseTime) {
            getHTMLElement("#circle").style.borderColor = "#219653";
            if (seconds == 0 && minutes == 0) {
                minutes = Trabalho;
            }
            Time();
            if (seconds == 0 && minutes == 0) {
                pauseTime = true;
            }
        } else if (pauseTime) {
            getHTMLElement("#circle").style.borderColor = "#F2C94C";
            if (seconds == 0 && minutes == 0) {
                minutes = Pausa;
                const allBalls = document.querySelectorAll("#points .ball");
                for(let i = 0; i < allBalls.length; i++) {
                    if (allBalls[i].style.backgroundColor == "rgb(60, 66, 98)") {
                        allBalls[i].style.backgroundColor = "#219653"
                        break;
                    }
                }
            }
            Time();
            if (seconds == 0 && minutes == 0) {
                pauseTime = false;
                
            }
        }
    }
}, 1000);

setInterval(() => {
    let completed = false;
    const allBalls = document.querySelectorAll("#points .ball");
    for(let i = 0; i < allBalls.length; i++) {
        if (allBalls[i].style.backgroundColor == "rgb(33, 150, 83)") {
            completed = true;
        } else {
            completed = false;
            break;
        }
    }
    if (completed && !pauseTime) {
        clearInterval(timer);
    }
}, 1000);

const boxPoints = getHTMLElement("#points");
for(let c = 0;c < parseInt(Sessoes);c++) {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = "#3C4262";
    boxPoints.appendChild(ball);
}

getHTMLElement('#Text button').addEventListener('click', () => {
    getHTMLElement('#Text button label').innerHTML = userPaused?"=":"△";
    userPaused = !userPaused;
    getHTMLElement("#circle").style.borderColor = userPaused?"#FF0000":"";
});

getHTMLElement("a#button").addEventListener("click", () => {
    returnToStart();
});

function Time() {
    if (seconds == 0 && minutes != 0) {
        seconds = 60;
        minutes--
    }
    seconds--;
    getHTMLElement("#circle label").innerHTML = `${minutes.toString().length == 1?"0" + minutes:minutes}:${seconds.toString().length == 1?"0" + seconds:seconds}`;
}

function returnToStart() {
    window.location.href = "index.html";
}

function getHTMLElement(selector) {
    return document.querySelector(selector);
}