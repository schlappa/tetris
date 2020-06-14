let context

const SQUARE_SIDE = 40;
const SQUARE_SIDE_PADDING = 5;

export function initCanvas(canvasId) {
    const canvas = document.getElementById(canvasId)

    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

export function renderMatrix(matrix) {
    matrix.map(cell => renderCell(cell))
}

async function renderCell(cell) {
    const position = {
        x: cell.x * SQUARE_SIDE,
        y: cell.y * SQUARE_SIDE
    }
    const color = (cell.square !== undefined) ? cell.square.color : "#161616"

    renderSquare(position, SQUARE_SIDE, SQUARE_SIDE_PADDING, color)
}

function renderSquare(position, side, padding, color) {
    context.fillStyle = color
    context.fillRect(
        position.x + padding,
        position.y + padding,
        side - padding,
        side - padding)
}
