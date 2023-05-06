const input = document.querySelector("#input");
const copy=document.getElementById("#copiar");

document.querySelector("#encriptar").addEventListener("click", () => { encriptar("encriptar") });
document.querySelector("#desencriptar").addEventListener("click", () => { encriptar("desencriptar") });
document.querySelector("#copiar").addEventListener("click",()=>{copiarEncriptado()});

function validarInput() {

    formatearOutput();
    let inputNormalizado;
    inputNormalizado = input.value.replaceAll('á', 'a');
    inputNormalizado = inputNormalizado.replaceAll('é', 'e');
    inputNormalizado = inputNormalizado.replaceAll('í', 'i');
    inputNormalizado = inputNormalizado.replaceAll('ó', 'o');
    inputNormalizado = inputNormalizado.replaceAll('ú', 'u');
    inputNormalizado = inputNormalizado.replaceAll('ñ', 'n');

    return inputNormalizado

}

function formatearOutput() {

    if (input.value === "") {

        document.getElementById("output").setAttribute("class", "output-image");
        document.getElementById("output").value = "";
        document.querySelectorAll(".output>h3, .output>p").forEach(el => el.removeAttribute("hidden"));
        document.getElementById("copiar").setAttribute("hidden", "")

    }
    else {
        document.getElementById("output").removeAttribute("class", "output-image");
        document.querySelectorAll(".output>h3, .output>p").forEach(el => el.setAttribute('hidden', ''));
        document.getElementById("copiar").removeAttribute("hidden")
    }
}

function encriptar(string) {

    const inputNormalizado = validarInput()
    const reemplazos = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    if (string === "encriptar") {
        let arrString = []

        for (let i = 0; i < inputNormalizado.length; i++) {
            if (reemplazos.hasOwnProperty(inputNormalizado[i])) {
                arrString.push(reemplazos[inputNormalizado[i]]);

            } else arrString.push(inputNormalizado[i]);
        }
        document.getElementById("output").value = arrString.join('')

    } else if (string === "desencriptar") {
        const desencriptar = Object.values(reemplazos);
        let palabraNueva = inputNormalizado;

        for (let i = 0; i < desencriptar.length; i++) {
            palabraNueva = palabraNueva.replaceAll(desencriptar[i], desencriptar[i][0]);
        }
        document.getElementById("output").value = palabraNueva;
    }
}

function copiarEncriptado(){

    let copy=document.querySelector("#output").value;

    navigator.clipboard.writeText(copy).then(()=>{

        document.getElementById("input").value=copy;
        document.getElementById("output").value="";
    });
}



