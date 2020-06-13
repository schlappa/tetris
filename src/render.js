import { wait, getEdgeSizes } from './utils.js'

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
    const [height, width] = getEdgeSizes(matrix)

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            await wait(3);

            const position = {
                x: y * SQUARE_SIDE,
                y: x * SQUARE_SIDE
            }
            const color = (matrix[x][y].square !== undefined) ? matrix[x][y].square.color : "#161616"

            drawSquare(position, SQUARE_SIDE, SQUARE_SIDE_PADDING, color)
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
