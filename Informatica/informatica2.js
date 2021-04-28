let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")


function dibujarPeon(x, y, r, color){
    ctx.strokeStyle = color
    ctx.fillStyle = color

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x-r, y+r*2.5)
    ctx.lineTo(x+r, y+r*2.5)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.rect(x-1.1*r, y+r*2.5, r*2.2, r/3)
    ctx.stroke()
    ctx.fill()
}

for(let x = 5; x < 140; x= x+20){
    dibujarPeon(x, 450, 5, "Black")
}

for(let x = 55; x < 1000; x= x+135){
    dibujarPeon(x, 270, 50, "Orange")
}

for(let x = 30; x < 420; x= x+55){
    dibujarPeon(x, 120, 20, "Purple")
}