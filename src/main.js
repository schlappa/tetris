import * as data from './data.js'
import * as render from './render.js'

function run() {
    init()
    render.drawMatrix(data.matrix)
}

function init() {
    // TODO: the parameters should be replaced for user input values
    
    render.initCanvas("canvas")
    data.initMatrix(6, 10)
}

run()

// TODO: impelement a pseudo random number generator 
