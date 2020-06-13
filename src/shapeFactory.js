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
    const subMatrix = shape.matrix

    const [height, width] = getEdgeSizes(subMatrix)
    const squares = []

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            const matrixCell = getMatrixCellByPosition(matrix, startPosition.x + x, startPosition.y + y)
            const matrixCellIsEmpty = matrixCell.square === undefined
            const subMatrixIsNotEmpty = subMatrix[x][y] != 0

            if (matrixCellIsEmpty && subMatrixIsNotEmpty) {
                const matrixPosition = { x: startPosition.x + x, y: startPosition.y + y }
                const subMatrixPosition = { x: x, y: y }
                const color = shape.color
                const square = createSquare(
                    matrix,
                    matrixPosition,
                    subMatrixPosition,
                    color)

                squares.push(square)
            }
        }
    }
}

function createSquare(matrix, matrixPosition, subMatrixPosition, color) {
    const square = {
        guid: getTimestamp(),
        matrixPosition: matrixPosition,
        subMatrixPosition: subMatrixPosition,
        color: color
    }
    
    matrix[matrixPosition.x][matrixPosition.y].square = square

    return square
}

export function increaseGravityForShape(matrix, shapeInstance) {
    const subMatrix = shapeInstance.shape.matrix
    const height = subMatrix.length
    const width = subMatrix[0].length

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            const subMatrixCell = subMatrix[x][y]
            const matrixCell = getMatrixCellById(matrix, subMatrixCell.guid)


        }
    }
}
