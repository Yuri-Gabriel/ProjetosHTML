localStorage.removeItem("Trabalho");
localStorage.removeItem("Pausa");
localStorage.removeItem("Sessoes");

const buttonsUp = getAllHTMLElement(".buttonUpperNum");
const buttonsDown = getAllHTMLElement(".buttonDownNum");
const buttonSubmit = document.querySelector("main > div:nth-child(2) button");

buttonSubmit.addEventListener("click", () => {
    const Labels = getAllHTMLElement(`.textContainer > label:nth-child(1)`);
    for (let i = 0; i < Labels.length; i++) {
        const label = Labels.item(i);
        switch (i) {
            case 0:
                localStorage.setItem("Trabalho", getHTMLElementValue(label));
                break;
            case 1:
                localStorage.setItem("Pausa", getHTMLElementValue(label));
                break;
            case 2:
                localStorage.setItem("Sessoes", getHTMLElementValue(label));
                break;
        }
        
    }
});

ButtonsEvent(buttonsDown, -1);
ButtonsEvent(buttonsUp, 1);

function ButtonsEvent(Buttons, UpOrDown) {
    for(let i = 0; i < Buttons.length; i++) {
        const button = Buttons.item(i);
        button.addEventListener("click", () => {
            const Labels = getAllHTMLElement(`.textContainer > label:nth-child(1)`);
            const label = Labels.item(i);
            if (UpOrDown == -1 && getHTMLElementValue(label) != "00" ||
                UpOrDown == 1) {
                const value = parseInt(getHTMLElementValue(label))+UpOrDown;
                label.innerHTML = value.toString().length == 1 ? "0" + value : value;
            }
        });
    }
}

function getHTMLElementValue(Element) {
    return Element.innerHTML.trim();
}

function getAllHTMLElement(selector) {
    return document.querySelectorAll(selector);
}