import { shapes } from './shapes.js'
import { createShape, increaseGravityForShape } from './shapeFactory.js'
import { renderMatrix } from './render.js'
import { wait } from './utils.js'

export let matrix = []
export let shapesPool = []

export async function initMatrix(width, height) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            matrix.push({
                x: x,
                y: y,
                square: undefined
            })
        }
    }

    renderMatrix(matrix)

    let ticks = 0;
    while (true) {
        if (ticks++ % 5 == 0)
            addNewShape()

        increaseGravity()
        renderMatrix(matrix)

        await wait(300)
    }
}

function addNewShape() {
    const shape = takeRandomShape()
    const shapeInstance = createShape(matrix, shape)

    shapesPool.push(shapeInstance)
}

function takeRandomShape() {
    const totalPieces = shapes.length - 1
    const randomPieceIndex = Math.round(Math.random() * totalPieces)

    return shapes[randomPieceIndex]
}

export function increaseGravity() {
    shapesPool.forEach(shapeInstance => increaseGravityForShape(matrix, shapeInstance));
}