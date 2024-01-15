const canvas = document.getElementById("canvas2");
const context = canvas.getContext('2d');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

var x = 25;
var y = 30;
var vx = 1;
var vy = 2;
var radius = 20;
var lastTimestamp = 0;

function render(timestamp) {
    requestAnimationFrame(render);

    const elapsed = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);

    context.strokeStyle = "white";
    context.lineWidth = 2;

    context.fillStyle = "white";
    context.fill();

    context.stroke();


    x = x + vx * (elapsed / 8);  
    y = y + vy * (elapsed / 8);  

    if ((radius + x > canvasWidth) || (x - radius <= 0))
        vx = -vx;

    if ((y + radius > canvasHeight) || (y - radius <= 0))
        vy = -vy;
}

requestAnimationFrame(render);
