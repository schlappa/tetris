import { getTimestamp, getMatrixCellById, getMatrixCellByPosition, getEdgeSizes } from './utils.js'

export function createShape(matrix, shape) {
    // TODO: verify if the position is available to append the shape matrix

    const startPosition = { x: 1, y: 1 }
    const shapeInstance = {
        guid: getTimestamp(),
        shape: shape,
        squares: createSquares(matrix, shape, startPosition)
    };

    return shapeInstance;
}

function createSquares(matrix, shape, startPosition) {
    const shapeMatrix = shape.matrix
    const [height, width] = getEdgeSizes(shapeMatrix)
    const squares = []

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            const matrixCell = getMatrixCellByPosition(matrix, startPosition.x + x, startPosition.y + y)
            const matrixCellIsEmpty = matrixCell.square === undefined
            const shapeMatrixIsNotEmpty = shapeMatrix[x][y] != 0

            if (matrixCellIsEmpty && shapeMatrixIsNotEmpty) {
                const matrixPosition = { x: startPosition.x + x, y: startPosition.y + y }
                const shapeMatrixPosition = { x: x, y: y }
                const color = shape.color
                const square = createSquare(
                    matrix,
                    matrixPosition,
                    shapeMatrixPosition,
                    color)

                squares.push(square)
            }
        }
    }
}

function createSquare(matrix, matrixPosition, shapeMatrixPosition, color) {
    const square = {
        guid: getTimestamp(),
        matrixPosition: matrixPosition,
        shapeMatrixPosition: shapeMatrixPosition,
        color: color
    }
    
    matrix[matrixPosition.x][matrixPosition.y].square = square

    return square
}

export function increaseGravityForShape(matrix, shapeInstance) {
    const shapeMatrix = shapeInstance.shape.matrix
    const height = shapeMatrix.length
    const width = shapeMatrix[0].length

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            const shapeMatrixCell = shapeMatrix[x][y]
            const matrixCell = getMatrixCellById(matrix, shapeMatrixCell.guid)


        }
    }
}
