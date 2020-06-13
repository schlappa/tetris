export async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function getTimestamp() {
    const timeStampInMs =
        window.performance &&
            window.performance.now &&
            window.performance.timing &&
            window.performance.timing.navigationStart
            ? window.performance.now() + window.performance.timing.navigationStart
            : Date.now()

    return timeStampInMs
}

export function getEdgeSizes(matrix) {
    const height = matrix.length
    const width = matrix[0].length

    return [height, width]
}

export function getMatrixCellById(matrix, guid) {
    return matrix.filter(cell =>
        cell.square !== undefined &&
        cell.square.guid == guid)
}

export function getMatrixCellByPosition(matrix, x, y) {
    return matrix.filter(cell =>
        cell.x == x &&
        cell.y == y)
}
