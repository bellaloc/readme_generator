function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

function renderLicenseLink(license) {

  if (!license) {
    return '';
  }

  return `[License](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {

  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
