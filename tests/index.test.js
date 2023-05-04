/*const { exec } = require('child_process')

const go = (command) => {
    return 'node ./src/index.ts ' + command
}

describe('version command', () => {
    test('should display the current version of the CLI', (done) => {
        exec(go('version'), (error, stdout) => {
            expect(stdout).toMatch(/\d+\.\d+\.\d+/)
            done()
        })
    })
})*/

test("displays `let's go`", () => {
    console.log("let's go!")
})
