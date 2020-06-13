let context

const SQUARE_SIDE = 40;
const SQUARE_SIDE_PADDING = 5;

export function initCanvas(canvasId) {
    const canvas = document.getElementById(canvasId)

    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

export async function drawMatrix(matrix) {
    console.log(matrix)
    
    const height = matrix.length
    const width = matrix[0].length

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            await wait(3);

            const position = {
                x: y * SQUARE_SIDE,
                y: x * SQUARE_SIDE
            }
            const color = (matrix[x][y] !== undefined) ? matrix[x][y].color : "#161616"

            drawSquare(position, SQUARE_SIDE, SQUARE_SIDE_PADDING, color)
        }
    }
}

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function drawSquare(position, side, padding, color) {
    context.fillStyle = color
    context.fillRect(
        position.x + padding,
        position.y + padding,
        side - padding,
        side - padding)
}
