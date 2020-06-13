import { initMatrix } from './data.js'
import { initCanvas } from './render.js'
import { wait } from './utils.js'

async function run() {
    // TODO: the parameters should be replaced for user input values

    initCanvas("canvas")
    initMatrix(6, 10)

    while   (true) {
        await wait(1000);

        console.log('asd');
    }
}

run()
