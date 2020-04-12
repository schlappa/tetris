var context;

function init() {
    var canvas = document.getElementById("canvas");
    
    context = canvas.getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
}

function draw() {
    context.fillStyle = "yellow";
    context.fillRect(0, 0, 250, 100)
}

init();
draw();
