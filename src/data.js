import { shapes } from './shapes.js'
import { createShape } from './shapeFactory.js'
import { appendSubMatrixToMatrix } from './render.js'

export let matrix
export let shapesPool = []

export function initMatrix(width, height) {
    matrix = []

    for (let y = 0; y < width; y++) {
        matrix[y] = [];
        for (let x = 0; x < height; x++) {
            matrix[y][x] = 0
        }
    }

    let shape = takeRandomShape()
    var shapeInstance = createShape(shape)
    shapesPool.push(shapeInstance)
    console.log(shapesPool)

    appendSubMatrixToMatrix(matrix, shapeInstance.shape.matrix, { x: 0, y: 0 })
}

function takeRandomShape() {
    let totalPieces = shapes.length - 1
    let randomPieceIndex = Math.round(Math.random() * totalPieces)

    return shapes[randomPieceIndex]
}
