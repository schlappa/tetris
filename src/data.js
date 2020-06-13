import { shapes } from './shapes.js'
import { createShape, increaseGravityForShape } from './shapeFactory.js'
import { renderMatrix } from './render.js'

export let matrix = []
export let shapesPool = []

export function initMatrix(width, height) {
    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            matrix.push({
                x: x,
                y: y,
                square: undefined
            })
        }
    }

    const shape = takeRandomShape()
    const shapeInstance = createShape(matrix, shape)
    
    shapesPool.push(shapeInstance)

    renderMatrix(matrix)
}

function takeRandomShape() {
    const totalPieces = shapes.length - 1
    const randomPieceIndex = Math.round(Math.random() * totalPieces)

    return shapes[randomPieceIndex]
}

export function increaseGravity() {
    shapesPool.forEach(shapeInstance => increaseGravityForShape(matrix, shapeInstance));
}