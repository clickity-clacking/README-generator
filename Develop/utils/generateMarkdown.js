const fs = require('fs');

//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // "apache", "GNU", "mit", "mpl-2.0","osl-3.0"
    if(license === "apache"){
      return `![apache badge](https://img.shields.io/badge/badge-apache-yellow)`
    } else if(license === "GNU"){
      return `![GNU badge](https://img.shields.io/badge/badge-GNU-orange)`
    } else if(license === "mit"){
      return `![mit badge](https://img.shields.io/badge/license-MIT-brightgreen)`
    } else if(license === "mpl-2.0"){
      return `![mozilla badge](https://img.shields.io/badge/badge-MPL-red)`
    } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'apache'){
    return `[apache](http://www.apache.org/licenses/)`;
  } else if(license === 'GNU'){
    return `[GNU](https://fsf.org/)`;
  } else if(license === 'mit'){
    return `[mit](https://github.com/clickity-clacking/Horiseon-code-refractor/community/license/new?branch=main&template=mit)`;
  } else if(license === 'mpl-2.0'){
    return `[mpl-2.0](https://github.com/clickity-clacking/Horiseon-code-refractor/community/license/new?branch=main&template=mpl-2.0)`; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license=== 'apache'){
    return "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if(license=== 'GNU'){
    return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
  } else if(license=== 'mit'){
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";   
  } else if(license=== 'mpl-2.0'){
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
  }
}

function generateGitHubLink(link) {
  return `[gitHub](${link})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

##Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contributors}

## License
${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
<p>${renderLicenseSection(data.license)}<p>

## Questions?
Contact me at: 
[gitHub](${data.github})
${data.email}

`;
}


module.exports = generateMarkdown;

