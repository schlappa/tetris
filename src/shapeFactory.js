import { getTimestamp, getMatrixCellById, getMatrixCellByPosition } from './utils.js'

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
    const shapeCannotBeCreated = shape.squares.some(squarePosition => {
        const matrixCell = getMatrixCellByPosition(matrix, startPosition.x + squarePosition.x, startPosition.y + squarePosition.y)
        
        return matrixCell.square !== undefined
    })
    if (shapeCannotBeCreated) {
        console.log('it is not possible create more shapes')
        return
    }
    
    const squares = []

    shape.squares.map(squarePosition => {
        const matrixCell = getMatrixCellByPosition(matrix, startPosition.x + squarePosition.x, startPosition.y + squarePosition.y)
        const matrixCellIsEmpty = matrixCell.square === undefined

        if (matrixCellIsEmpty) {
            const matrixPosition = { x: startPosition.x + squarePosition.x, y: startPosition.y + squarePosition.y }
            const color = shape.color
            const square = createSquare(
                matrix,
                guidShape,
                matrixPosition,
                squarePosition,
                color)

            squares.push(square)
        }
    })
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
    const cellsToDown = matrix.filter(cell =>
        cell.square !== undefined &&
        cell.square.guidShape === shapeInstance.guid)
    const nextCellsToDown = cellsToDown.map(cell => getMatrixCellByPosition(matrix, cell.x, cell.y + 1))

    const shapeIsBlockedToMove = nextCellsToDown.some(cell =>
        cell !== undefined &&
        cell.square !== undefined &&
        !cellsToDown.includes(cell))
    if (shapeIsBlockedToMove)
        return

    // TODO: change hardcoded 20 value
    const shapeIsOnBase = cellsToDown.some(cell => 20 == cell.y + 1)
    if (shapeIsOnBase)
        return

    cellsToDown
        .reverse()
        .map(cell => {
            const nextCell = getMatrixCellByPosition(matrix, cell.x, cell.y + 1)

            nextCell.square = cell.square
            cell.square = undefined
        })
}
