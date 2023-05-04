#!/usr/bin/env node

const cli = require('commander')
const { exec } = require('child_process')
const figlet = require('figlet')
const clear = require('clear')

const packageJson = require('../package.json')

/**
 * Display error.
 * @param error
 * @param stdout
 * @param stderr
 */

const displayError = (error: any, stdout: string, stderr: string) => {
    if (error) {
        console.error('error: ' + error.message)
        return
    }
    if (stderr) {
        console.error('stderr: ' + stderr)
        return
    }
    console.log(stdout)
}

/**
 * Display automatic help and version.
 */

cli.name('go')
    .description(packageJson.description)
    .version(packageJson.version)
    .option('-p, --push', 'push after commit (see commit command)')
    .option('-t, --tag <tag_name>', 'add a tag (see commit command)')
    .addHelpText('before', figlet.textSync('GO...'))
    .parse(process.argv)

/**
 * Command to commit.
 */

cli.command('commit <message>')
    .description('commits with a message')
    .option('-p, --push', 'push after commit')
    .option('-t, --tag <tag_name>', 'add a tag')
    .action((message: string, cmdObj: any) => {
        let command = 'git add . && git commit -m "' + message + '"'
        if (!cmdObj.push) {
            command += ' && git push origin HEAD'
        }
        if (cmdObj.tag) {
            command += ' && git tag -a ' + cmdObj.tag + ' -m "' + message + '"'
            if (!cmdObj.push) {
                command += ' && git push origin ' + cmdObj.tag
            }
        }
        exec(command, (error: any, stdout: string, stderr: string) =>
            displayError(error, stdout, stderr)
        )
    })

/**
 * Command to pull a branch.
 */

cli.command('pull <branch_name>')
    .description(
        "pulls the latest changes from a specific branch and switches if it's different from the current branch"
    )
    .action((branchName: string) => {
        exec(
            'git symbolic-ref --short HEAD',
            (error: any, stdout: string, stderr: string) => {
                if (error) {
                    console.error(`error: ${error.message}`)
                    return
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`)
                    return
                }
                if (branchName !== stdout.trim()) {
                    exec(
                        `git checkout ${branchName}`,
                        (error: any, stdout: string, stderr: string) => {
                            displayError(error, stdout, stderr)
                        }
                    )
                }
                exec(
                    `git pull origin ${branchName}`,
                    (error: any, stdout: string, stderr: string) =>
                        displayError(error, stdout, stderr)
                )
            }
        )
    })

/**
 * Display version.
 */

cli.command('version')
    .description('display the version number')
    .action(() => {
        console.log(packageJson.version)
    })

/**
 * Parse Argv.
 */

cli.parseAsync(process.argv).catch((err: string) => {
    console.error(err)
})
