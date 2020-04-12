import { pieces } from './seed.js'
import { appendSubMatrixToMatrix } from './render.js'

export let matrix

export function initMatrix(height, width) {
    matrix = []

    for (let x = 0; x < height; x++) {
        matrix[x] = [];
        for (let y = 0; y < width; y++) {
            matrix[x][y] = 0
        }
    }

    let piece = takeRandomPiece()
    appendSubMatrixToMatrix(matrix, piece.matrix, { x: 0, y: 0 })
}

function takeRandomPiece() {
    let totalPieces = pieces.length - 1
    let randomPieceIndex = Math.round(Math.random() * totalPieces)

    return pieces[randomPieceIndex]
}
