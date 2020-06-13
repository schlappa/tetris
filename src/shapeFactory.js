import { getTimestamp, getMatrixCellById, getMatrixCellByPosition, getEdgeSizes } from './utils.js'

export function createShape(matrix, shape) {
    // TODO: verify if the position is available to append the shape matrix

    const guid = getTimestamp()
    const startPosition = { x: 0, y: 0 }
    const shapeInstance = {
        guid: guid,
        shape: shape,
        squares: createSquares(matrix, shape, guid, startPosition)
    };

    return shapeInstance;
}

function createSquares(matrix, shape, guidShape, startPosition) {
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
                    guidShape,
                    matrixPosition,
                    shapeMatrixPosition,
                    color)

                squares.push(square)
            }
        }
    }
}

function createSquare(matrix, guidShape, matrixPosition, shapeMatrixPosition, color) {
    const square = {
        guid: getTimestamp(),
        guidShape: guidShape,
        matrixPosition: matrixPosition,
        shapeMatrixPosition: shapeMatrixPosition,
        color: color
    }
    const cell = getMatrixCellByPosition(matrix, matrixPosition.x, matrixPosition.y)
    
    cell.square = square

    return square
}

export function increaseGravityForShape(matrix, shapeInstance) {
    const shapeMatrix = shapeInstance.shape.matrix
    const squaresToDown = matrix
        .flat()
        .filter(cell =>
            cell.square !== undefined &&
            cell.square.guidShape === shapeInstance.guid)
    console.log('squaresToDown', squaresToDown)

    squaresToDown.map(cell => {
        const nextCell = getMatrixCellByPosition(matrix, cell.x, cell.y + 1)

        console.log('cell', cell)
        console.log('nextCell', nextCell)
    })
}
