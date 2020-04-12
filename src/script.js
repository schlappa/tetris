let context
let matrix;

function init() {
    // TODO: the parameters should be replaced for user input values     
    initCanvas("canvas");
    initMatrix(6, 10);
}

function initCanvas(canvasId) {
    var canvas = document.getElementById(canvasId)
    
    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

function initMatrix(height, width) {
    matrix = Array(height).fill(Array(width).fill(0));
}

function drawMatrix() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            drawSquare({x: i * 40, y: j * 40}, 40, 4, "yellow")
        }
    }
}

function drawSquare(position, side, padding, color) {
    context.fillStyle = color
    context.fillRect(
        position.x + padding,
        position.y + padding,
        side - padding,
        side - padding)
}



init()
drawMatrix()
