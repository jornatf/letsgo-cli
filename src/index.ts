#!/usr/bin/env node

const cli = require('commander')
const { ExecException, exec } = require('child_process')
const figlet = require('figlet')
const packageJson = require('../package.json')

/**
 * Options for the "commit" command.
 */
interface CommitCommandOptions {
    push?: boolean
    tag?: string
}

/**
 * Displays error.
 * @param error
 * @param stderr
 */
const displayError = (error: typeof ExecException | null, stderr: string) => {
    if (error) {
        console.error(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`)
        return
    }
}

/**
 * Displays automatic help and version.
 */
cli.name('go')
    .description(packageJson.description)
    .version(packageJson.version)
    .option('-p, --push', 'push after commit (see commit command)')
    .option('-t, --tag <tag_name>', 'add a tag (see commit command)')
    .addHelpText('before', figlet.textSync('GO...'))
    .parse(process.argv)

/**
 * Commit.
 */
cli.command('commit <message>')
    .description('commits with a message')
    .option('-p, --push', 'push after commit')
    .option('-t, --tag <tag_name>', 'add a tag')
    .action((message: string, cmd: CommitCommandOptions) => {
        let command = `git add . && git commit -m "${message}"`
        if (cmd.push) {
            command += ' && git push origin HEAD'
        }
        if (cmd.tag) {
            command += ` && git tag -a ${cmd.tag} -m "${message}"`
            if (cmd.push) {
                command += ` && git push origin ${cmd.tag}`
            }
        }
        exec(
            command,
            (
                error: typeof ExecException | null,
                stdout: string,
                stderr: string
            ) => {
                displayError(error, stderr)
                console.log(stdout)
            }
        )
    })

/**
 * Pull a branch.
 */
cli.command('pull <branch_name>')
    .description(
        "pulls the latest changes from a specific branch and switches if it's different from the current branch"
    )
    .action((branchName: string) => {
        exec(
            'git symbolic-ref --short HEAD',
            (
                error: typeof ExecException | null,
                stdout: string,
                stderr: string
            ) => {
                displayError(error, stderr)
                if (branchName !== stdout.trim()) {
                    exec(
                        `git checkout ${branchName}`,
                        (
                            error: typeof ExecException | null,
                            stdout: string,
                            stderr: string
                        ) => {
                            displayError(error, stderr)
                            console.log(stdout)
                        }
                    )
                }
                exec(
                    `git pull origin ${branchName}`,
                    (
                        error: typeof ExecException | null,
                        stdout: string,
                        stderr: string
                    ) => {
                        displayError(error, stderr)
                        console.log(stdout)
                    }
                )
            }
        )
    })

/**
 * Displays version.
 */
cli.command('version')
    .description('display the version number')
    .action(() => {
        console.log(packageJson.version)
    })

/**
 * Parses Argv.
 */
cli.parseAsync(process.argv).catch((err: string) => {
    console.error(err)
})
