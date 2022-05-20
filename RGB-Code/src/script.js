window.addEventListener('load', () => {
    getColors();
    ChangeEvents();
});

function getColors() {
    //VERMELHO
    let input_red = document.querySelector("#red").value
    let box_red = document.querySelector("#box-red")
    let num_red = document.querySelector("#num-red")

    box_red.style.background = `rgb(${input_red}, 0, 0)`
    num_red.innerHTML = `${input_red}`

    //VERDE
    let input_green = document.querySelector("#green").value
    let box_green = document.querySelector("#box-green")
    let num_green = document.querySelector("#num-green")

    box_green.style.background = `rgb(0, ${input_green}, 0)`
    num_green.innerHTML = `${input_green}`

    //AZUL
    let input_blue = document.querySelector("#blue").value
    let box_blue = document.querySelector("#box-blue")
    let num_blue = document.querySelector("#num-blue")

    box_blue.style.background = `rgb(0, 0, ${input_blue})`
    num_blue.innerHTML = `${input_blue}`

    //box
    let box = document.querySelector("#box-color")

    box.style.background = `rgb(${input_red}, ${input_green}, ${input_blue})`

    //CSS CODE
    let code = document.querySelector("#code")
    code.innerHTML = `rgb(${input_red}, ${input_green}, ${input_blue})`   
}

function ChangeEvents() {
    document.querySelector("#red").addEventListener("input", getColors)
    document.querySelector("#green").addEventListener("input", getColors)
    document.querySelector("#blue").addEventListener("input", getColors)
}

function Copy() {

    let code = document.querySelector("#code")
    
    let input = document.createElement("input");
    input.id = "inp";
    input.value = code.innerHTML;
    code.appendChild(input);
    
    document.querySelector('#inp').select();
    document.execCommand("copy");
    alert("O texto copiado foi: " + input.value);
    
    code.removeChild(input);
    //alert(`O codigo ${code} foi copiado!`)
    
}