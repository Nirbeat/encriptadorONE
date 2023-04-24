const reemplazos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

let palabra = "murcielago";


function encriptar(string,bool) {
    if(bool===true){
        let arrString=[]

        for(let i=0;i<string.length;i++){
            if(reemplazos.hasOwnProperty(string[i])){
                arrString.push(reemplazos[string[i]]);
    
            }else arrString.push(string[i]);
        }
        console.log(arrString.join(''))
        return arrString.join('');
    }else{
        const desencriptar = Object.values(reemplazos);
        let palabraNueva = string;
    
        for (let i = 0; i < desencriptar.length; i++) {
            palabraNueva = palabraNueva.replaceAll(desencriptar[i],desencriptar[i][0]);
        }
        console.log(palabraNueva)
        return (palabraNueva);
    }
}

encriptar(palabra,true)


