import { initMatrix } from './data.js'
import { initCanvas } from './render.js'

function run() {
    // TODO: the parameters should be replaced for user input values

    initCanvas("canvas")
    initMatrix(6, 10)
}

run()
