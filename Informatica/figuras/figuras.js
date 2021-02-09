let ancho
let alto
let linea
let nColumna
let nLinea


do{
    ancho= paarseFloat(prompt("Ingrese el ancho))
} while (isNaN(ancho)||ancho<1)

do{
    alto= parseFloat(prompt("Ingrese el alto"))
} while (isNaN (alto) || alto<1)


nLinea=0
while(nLinea<alto) {
    linea= " "
    nColumna = 0
    while (nColumna<ancho){
        linea=linea + "*"
        nColumna=nColumna+1
    }
    console.log (linea)
    nLinea=nLinea+1
}



nLinea= 0
while (nLinea<alto){
    linea= ""
    nColumna=0
    while (nColumna<ancho){
        if (nLinea>=nColumna){
            linea=linea + "*"
        }else{
            linea= linea + ""
        }
        nColumna = nColumna +1
    }
    console.log (linea)
    nLinea = nLinea +1
}


nLinea = 0
while (nLinea<alto){
    linea= " "
    nColumna = 0
    while (nColumna<ancho){
        if (nLinea<= nColumna) {
            linea = linea + "*"
        }else {
            linea= linea + " "
        }
        nColumna = nColumna + 1
    }
    console.log (linea)
    nLinea = nLinea + 1
}

nLinea = 0
while (nLinea<alto){
    linea = " "
    nColumna = 0
    while (nColumna< ancho) {
        if (nLinea == nColumna || nLinea<=0 || nColumna == alto -1){
            linea= linea + "*"
        } else {
            linea=linea + " "
        }
        nColumna = nColumna + 1 
    }
    console.log (linea)
    nLinea = nLinea + 1
}

nLinea = 0
while (nLinea<ancho|| nColumna<alto){
    linea= ""
    nColumna = 0
    while (nColumna<nLinea){
        nColumna= nColumna + 1
        linea = linea + " "
    }
    nColumna = 0
    while (nColumna<ancho || nColumna<alto ){
        nColumna =  nColumna +1
        linea = linea + "*"
    }
    linea = linea + "*"
    console.log (linea)
    nLinea = nLinea + 1
}

nLinea = 0
while (nLinea<ancho || nColumna<alto) {
linea = " "
nColumna = 0
while (nColumna>=nLinea){
    nColumna=nColumna +1
    linea = linea + " "
}
nColumna= 0
while (nColumna<ancho ||  nColumna<alto){
    nColumna= nColumna + 1
    linea=linea + "*"
}
linea = linea + "*"
console.log (linea)
nLinea =nLinea + 1
}

nLinea=0
while (nLinea<=alto){
    linea= " "
    nColumna = 0
    while (nColumna<=ancho){
        if (nLinea==0|| nLinea==alto){
            linea= linea + "*"
        } else {
            linea=linea + ""
        }
        nColumna=nColumna + 1
    }
    console.log (linea)
    nLinea= nLinea + 1
}
