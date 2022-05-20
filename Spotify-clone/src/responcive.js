
Header()
Menus()

function getWindowSize(){
    return window.innerWidth
};

window.addEventListener('resize', function() {

    if (getWindowSize() > 850)  {
        fecharMenu()
    }

    Header()
    Menus()
});

function abrirMenu(){
    let menu = document.querySelector("#menu-bar")
    let background = document.getElementsByClassName("background")
    let body = document.querySelector("#body")
    
    body.style.overflow = "hidden"
    menu.style.display = "block"
    for(let c = 0; c < background.length; c++) {
        background[c].style.filter = "brightness(60%)"
        background[c].style.overflowY = "hidden"
    }
    
}

function fecharMenu() {
    let menu = document.querySelector("#menu-bar")
    let background = document.getElementsByClassName("background")
    let body = document.querySelector("#body")
    
    body.style.overflow = "visible"
    menu.style.display = "none"
    for(let c = 0; c < background.length; c++) {
        background[c].style.filter = "brightness(100%)"
        background[c].style.overflowY = "visible"
    }
    
}

function Menus() {
    let menu_nav = document.querySelector("#menu-nav")
    let nav = document.querySelector("#nav")

    if (getWindowSize() <= 850) {
        menu_nav.style.display = "block"
        nav.style.display = "none"
    } else {
        menu_nav.style.display = "none"
        nav.style.display = "block"
    }
}

function Header() {
    let header = document.querySelector("#header")

    if(getWindowSize() <= 850) {
        header.style.height = "50px"
    } else {
        header.style.height = "60px"
    }
}