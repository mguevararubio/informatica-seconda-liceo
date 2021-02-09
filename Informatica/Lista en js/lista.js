let comida = [
    {nombre: "pan"},
    {nombre: "arroz"},
    {nombre: "huevos"},
    {nombre: "carne"},
    {nombre: "pescado"},
]
let lista = document.querySelector ("#comida")
let contlista = `<ul></ul>`
for (comida of comida) {
    contlista = contlista + `<li> ${comida.nombre} </li>`
}
lista.innerHTML= contlista;