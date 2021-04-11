let canvas = document.querySelector ("#miCanvas")
let ctx = canvas.getContext ("2d")

ctx.fillStyle = "yellow"
ctx.fillRect (30, 40, 50, 300)
ctx.stroke();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(55, 40, 25, 0, Math.PI, true);
ctx.moveTo(50, 100);
ctx.lineTo(50, 100);
ctx.fill();

ctx.fillStyle = "grey"
ctx.fillRect (30, 40, 50, 10)

ctx.fillStyle = ("black");
ctx.beginPath();
ctx.moveTo(30, 340);
ctx.lineTo(55, 390);
ctx.lineTo(80, 340);
ctx.fill();

ctx.fillStyle = ("white");
ctx.beginPath();
ctx.moveTo(30, 340);
ctx.lineTo(43, 365);
ctx.lineTo(67, 365);
ctx.lineTo(80, 340);
ctx.stroke();
ctx.fill();

ctx.fillStyle = ("black");
ctx.fillRect (200, 50, 150, 300)

ctx.fillStyle = "grey"
ctx.fillRect (215, 60, 120, 250)

ctx.fillStyle = "13100F";
ctx.beginPath();
ctx.arc(275, 330, 12, 0, 2*Math.PI, true);
ctx.moveTo(50, 100);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.fill();