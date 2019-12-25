
const ensure = (condition, text) => {
    if (!condition) {
        console.log(`${text} test fail`)
    }
}


const log = console.log;
module.exports = { ensure, log };