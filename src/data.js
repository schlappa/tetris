// TODO: improve how can be hanlded only by the js, use let
var matrix

function initMatrix(height, width) {
    matrix = []

    for (let x = 0; x < height; x++) {
        matrix[x] = [];
        for (let y = 0; y < width; y++) {
            matrix[x][y] = 0
        }
    }
function takeRandomPiece() {
    let totalPieces = pieces.length - 1
    let randomPieceIndex = Math.round(Math.random() * totalPieces)

    return pieces[randomPieceIndex]
}
