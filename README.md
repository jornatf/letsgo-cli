# letsgo-cli

| About package                                                                                                                                                                                                                                                                                                                                                     | About code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Latest Version](https://img.shields.io/github/v/tag/jornatf/letsgo-cli?label=version&style=flat-square) [![Downloads](https://img.shields.io/npm/dt/letsgo-cli?label=downloads&style=flat-square)](https://www.npmjs.com/package/letsgo-cli) [![License](https://img.shields.io/github/license/jornatf/letsgo-cli?label=license&style=flat-square)](LICENCE.md) | [![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/jornatf/letsgo-cli/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/jornatf/letsgo-cli/actions?query=workflow%3Arun-tests+branch%3Amain) [![GitHub Prettier Action Status](https://img.shields.io/github/actions/workflow/status/jornatf/letsgo-cli/fix-styling-code.yml?branch=main&label=code+style&style=flat-square)](https://github.com/jornatf/letsgo-cli/actions?query=workflow%3Afix-styling-code+branch%3Amain) |

**Let's go commit and push in a single command line. 🚀**

> This CLI is intended to help you commit and push your changes simply with the least command line. Other commands allow you to go faster. Find it out in the **[NPM Registry](https://www.npmjs.com/package/letsgo-cli)**.

#### Table of content:

-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Options and commands](#options-and-commands)
    -   [Commands](#commands)
        -   [`commit`](#commit)
        -   [`pull`](#pull)
        -   [`version`](#version)
        -   [`help`](#help)
    -   [Options](#options)
-   [Changelog](#changelog)
-   [Contributing](#contributing)
-   [Credits](#credits)
-   [License](#license)

## Prerequisites

> First, you have to install [Nodejs](https://nodejs.dev) in your machine.

## Installation

```bash
# After, install globally the package:
npm install -g letsgo-cli
```

## Usage

```txt
go [options] <command>
```

## Commands and options

```txt
Commands:
  commit [options] <message>  commits with a message
  pull <branch_name>          pulls the latest changes from a specific branch and switches if it's
                              different from the current branch
  version                     display the version number
  help [command]              display help for command

Options:
  -V, --version               output the version number
  -p, --push                  push after commit (see commit command)
  -t, --tag <tag_name>        add a tag (see commit command)
  -h, --help                  display help for command
```

### Commands

#### `commit`

Commits and pushes in the same time.

```txt
go commit [--push | -p] [--tag | -t TAG] [--help | -h] <message>
```

#### `pull`

Pulls a branch and switches in this branch if not the current.

```txt
go pull [--help | -h] <branch_name>
```

#### `version`

Outputs the CLI version number.

```txt
go version [--help | -h]
```

#### `help`

Displays help for commands.

```txt
go help <command>
```

### Options

| Key               | Description                            |
| ----------------- | -------------------------------------- |
| `--version`, `-V` | output the CLI version number          |
| `--push`, `-p`    | push after commit (see commit command) |
| `--tag`, `t`      | add a tag (see commit command)         |
| `--help`, `-h`    | display help for command               |

## Changelog

> Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

> If you are interested in this project and want to improve it, fix errors or bugs, **you're welcome to contribute**.
>
> [![Contributors](https://img.shields.io/github/contributors/jornatf/letsgo-cli?style=flat-square)](../../contributors)

## Credits

-   [Jordan Nataf](https://github.com/jornatf)
-   [All Contributors](../../contributors)

## Licence

The MIT License (MIT).

> Please see [License File](LICENSE.md) for more information.
