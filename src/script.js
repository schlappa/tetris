let context

function init() {
    var canvas = document.getElementById("canvas")
    
    context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
}

function draw() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            drowSquare({x: i * 40, y: j * 40}, 40, 4, "yellow")
        }
    }
}

function drowSquare(position, side, padding, color) {
    context.fillStyle = color
    context.fillRect(
        position.x + padding,
        position.y + padding,
        side - padding,
        side - padding)
}

init()
draw()
