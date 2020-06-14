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

export function getMatrixCellById(matrix, guid) {
    return matrix
        .find(cell =>
            cell.square !== undefined &&
            cell.square.guid == guid)
}

export function getMatrixCellByPosition(matrix, x, y) {
    return matrix
        .find(cell =>
            cell.x == x &&
            cell.y == y)
}
