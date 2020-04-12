let context
let matrix

function init() {
    // TODO: the parameters should be replaced for user input values     
    initCanvas("canvas")
    initMatrix(6, 10)
}

function initCanvas(canvasId) {
    var canvas = document.getElementById(canvasId)

    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

function initMatrix(height, width) {
    matrix = []

    for (let x = 0; x < height; x++) {
        matrix[x] = [];
        for (let y = 0; y < width; y++) {
            matrix[x][y] = 0
        }
    }

    matrix[2][2] = 1
}

function drawMatrix() {
    let height = matrix.length
    let width = matrix[0].length

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            if (matrix[x][y] === 1)
                drawSquare({ x: x * 40, y: y * 40 }, 40, 5, "yellow")
            else
                drawSquare({ x: x * 40, y: y * 40 }, 40, 5, "#222")
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
