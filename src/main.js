import { initMatrix, increaseGravity } from './data.js'
import { initCanvas } from './render.js'

async function run() {
    // TODO: the parameters should be replaced for user input values

    initCanvas("canvas")
    initMatrix(6, 20)
}

run()
