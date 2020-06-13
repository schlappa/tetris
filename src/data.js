import { shapes } from './shapes.js'
import { createShape } from './shapeFactory.js'
import { drawMatrix } from './render.js'

export let matrix = []
export let shapesPool = []

export function initMatrix(width, height) {
    for (let x = 0; x < height; x++) {
        matrix[x] = [];
        for (let y = 0; y < width; y++) {
            matrix[x][y] = undefined
        }
    }

    let shape = takeRandomShape()
    var shapeInstance = createShape(matrix, shape)
    shapesPool.push(shapeInstance)

    drawMatrix(matrix)
}

function takeRandomShape() {
    let totalPieces = shapes.length - 1
    let randomPieceIndex = Math.round(Math.random() * totalPieces)

    return shapes[randomPieceIndex]
}
