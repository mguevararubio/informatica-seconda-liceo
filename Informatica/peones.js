let canvas = document.querySelector("#Tabla")
let ctx = canvas.getContext("2d")

ctx.lineWidth= 1

function dibujarPeon (xC, yC, color) {
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.arc(xC, yC, 15, Math.PI*0, 2*Math.PI,);
ctx.fill()
ctx.stroke()
ctx.beginPath()
ctx.moveTo(xC-5,yC+5)
ctx.lineTo(xC-25,yC+45)
ctx.lineTo(xC+25,yC+45)
ctx.lineTo(xC+5,yC+5)
ctx.stroke()
ctx.fill()
}

for(let i=100 ; i<700;i=i+80){
    dibujarPeon(i,40,"black")
}

for(let i=100;i<700;i=i+80){
    dibujarPeon(i,475,"white")
}