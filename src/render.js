var context

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
