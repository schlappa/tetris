export function createShape(matrix, shape) {
    // TODO: verify if the position is available to append the shape matrix

    const startPosition = { x: 1, y: 1 }
    const shapeInstance = {
        guid: timestamp(),
        shape: shape,
        squares: createSquares(matrix, shape.matrix, startPosition)
    };

    return shapeInstance;
}

function timestamp() {
    var timeStampInMs =
        window.performance &&
            window.performance.now &&
            window.performance.timing &&
            window.performance.timing.navigationStart
            ? window.performance.now() + window.performance.timing.navigationStart
            : Date.now()

    return timeStampInMs
}

function createSquares(matrix, subMatrix, startPosition) {
    const height = subMatrix.length
    const width = subMatrix[0].length

    let squares = []

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            const matrixCellIsEmpty = matrix[startPosition.x + x][startPosition.y + y] === undefined
            const subMatrixIsNotEmpty = subMatrix[x][y] != 0

            if (matrixCellIsEmpty && subMatrixIsNotEmpty) {
                const matrixPosition = { x: startPosition.x + x, y: startPosition.y + y }
                const subMatrixPosition = { x: x, y: y }
                const square = createSquare(
                    matrix,
                    matrixPosition,
                    subMatrixPosition,
                    timestamp(),
                    getColor(subMatrix[x][y]))
                
                squares.push(square)
            }
        }
    }
}

function createSquare(matrix, matrixPosition, subMatrixPosition, timestamp, color) {
    const square = {
        guid: timestamp,
        matrixPosition: matrixPosition,
        subMatrixPosition: subMatrixPosition,
        color: color
    }
    matrix[matrixPosition.x][matrixPosition.y] = square
    
    return square
}

function getColor(value) {
    switch (value) {
        case 1: return "red"
        case 2: return "blue"
        case 3: return "brown"
        case 4: return "green"
        case 5: return "cyan"
        case 6: return "white"
        case 7: return "magenta"
    }
}