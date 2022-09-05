// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license==="MIT"){
        return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
    }else if(license==="GPL"){
        return "![GPL](https://img.shields.io/badge/license-GPL-lightgreen)"
    }else if(license==="Apache 2.0"){
        return "![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = function (data){
    return `# ${data.name}
${renderLicenseBadge(data.license)}
## Table Of Contents
- [Description](#description)
- [Usage](#usage)
- [installation](#installation)
- [test](#test)

## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Test
${data.test}

[Visit my GitHub profile!](https://github.com/${data.gitusername})

 `
}