# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Example Reports](#example-reports)
  - [Installation](#installation)

## Usage

```bash
yarn analyze <BASE_PATH> -s <SCOPE_FILE> -g <GITHUB_URL> -o <OUTPUT_FILE>

# Example
yarn analyze contracts -s scope.example.txt -g githubLink.com -o outfile.md
```

- `BASE_PATH` is a relative path to the folder containing the smart contracts.
- `SCOPE_FILE` is an optional file containg a specific smart contracts scope (see [scope.example.txt](./scope.example.txt))
- `GITHUB_URL` is an optional url to generate links to github in the report
- `OUTPUT_FILE` is an optional file name where the output will be saved , by default it's saved in `report.md` file.

## Example Reports

| Repository                                                                        | Report                                                                     |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Ens](https://code4rena.com/contests/2023-10-ens)                           | [Report](https://gist.github.com/Picodes/e9f1bb87ae832695694175abd8f9797f) |


## Installation

You'll need [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/). Then clone the repo and run:

```bash
yarn
```

You're all set!
