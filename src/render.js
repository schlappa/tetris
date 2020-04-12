var context

const SQUARE_SIDE = 40;
const SQUARE_SIDE_PADDING = 5;

function initCanvas(canvasId) {
    var canvas = document.getElementById(canvasId)

    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

function drawMatrix() {
    let height = matrix.length
    let width = matrix[0].length

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            let position = {
                x: x * SQUARE_SIDE,
                y: y * SQUARE_SIDE
            }
            let color = matrix[x][y] !== 1
                ? "#161616"
                : "yellow"

            drawSquare(position, SQUARE_SIDE, SQUARE_SIDE_PADDING, color)
        }
    }
}

function getColor(value) {
    switch (value) {
        case 0: return "#161616"
        case 1: return "red"
        case 2: return "blue"
        case 3: return "brown"
        case 4: return "green"
        case 5: return "cyan"
        case 6: return "white"
        case 7: return "magenta"
    }
}

export function appendSubMatrixToMatrix(matrix, subMatrix, position) {
    let height = subMatrix.length
    let width = subMatrix[0].length

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            matrix[position.x + x][position.y + y] = subMatrix[x][y]
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
