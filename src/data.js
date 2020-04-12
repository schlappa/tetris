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
}
