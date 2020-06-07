let context

const SQUARE_SIDE = 40;
const SQUARE_SIDE_PADDING = 5;

export function initCanvas(canvasId) {
    let canvas = document.getElementById(canvasId)

    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

export function drawMatrix(matrix) {
    let height = matrix.length
    let width = matrix[0].length

    for (let y = 0; y < width; y++) {
        for (let x = 0; x < height; x++) {
            let position = {
                x: x * SQUARE_SIDE,
                y: y * SQUARE_SIDE
            }
            let color = getColor(matrix[x][y])

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

    for (let y = 0; y < width; y++)
        for (let x = 0; x < height; x++)
            matrix[position.y + y][position.x + x] = subMatrix[x][y]
}

function drawSquare(position, side, padding, color) {
    context.fillStyle = color
    context.fillRect(
        position.x + padding,
        position.y + padding,
        side - padding,
        side - padding)
}
