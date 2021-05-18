let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

let x = 0;
let y = 0;
let x2 = 550;
let y2 = 0;
let t = 30;

function horizontal(){ 
    let d = (t/1500) * 40;
    x = x + d;
    Peon(x, 260, 15, 'black');
}

function vertical(){ 
    let d = (t/1500) * 200;
    y = y + d;
    Peon(260, y, 15, 'white');
}

function movdiagonal(){ 
    let d = (t/1500) * 100;
    x2 = x2 - d;
    y2 = y2 + d;
    Peon(x2, y2, 15, 'black');
}


function mover(){
    ctx.clearRect(0,0, 575, 575);
    horizontal()
    vertical()
    movdiagonal()
}

window.setInterval(mover, t);




function Peon(xc, yc, r, color){
    ctx.strokeStyle = 'black'
    ctx.fillStyle = color

    ctx.beginPath()
    ctx.moveTo(xc,yc)
    ctx.lineTo(xc-15, yc+35)
    ctx.lineTo(xc+15, yc+35)
    ctx.lineTo(xc,yc)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(xc, yc, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

   

    
}