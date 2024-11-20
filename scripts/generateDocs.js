const LATEST_VERSION = 'latest';
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const fsExtra = require('fs-extra');
//const { lstatSync, readdirSync, existsSync } = require('fs');
const path = require('path');

const pathToExternalRepos = path.normalize(path.join(__dirname, '/../../'));

// npm run docs 2.13.0 is_latest
const version = process.argv.slice(2)[0];
const isLatest = process.argv.slice(2)[1];

// Get the next running number to prefix changelog with.
function getNextRunningNumber(directoryPath) {
  const items = fs.readdirSync(directoryPath, { withFileTypes: true });

  const folderNumbers = items
      .filter(item => item.isDirectory()) // Suodatetaan vain hakemistot
      .map(dir => parseInt(dir.name.split(' ')[0]))
      .filter(num => !isNaN(num));

  if (folderNumbers.length === 0) {
      return 1;
  }

  return Math.max(...folderNumbers) + 1;
}


if (!version) {
  throw new Error('\'npm run docs {version}\' - version is required');
}

// Init folder for version
const pathToVersionRoot = path.normalize(path.join(__dirname, '/../_content/docs/', version));

// remove old if exists (numbering etc. might've changed and we wanna rid ourselves from the stuff of previous build)
if (fsExtra.existsSync(pathToVersionRoot)) {
  fsExtra.rmSync(pathToVersionRoot, { recursive: true });
}

fs.mkdirSync(pathToVersionRoot, { recursive: true });
console.log(`Created folder for version ${version} in ${pathToVersionRoot}`);

// Shovel in the documentation from the other repo (https://github.com/oskariorg/oskari-documentation)
const pathToDocumentationRepository = path.join(pathToExternalRepos, 'oskari-documentation');
fs.cpSync(pathToDocumentationRepository, pathToVersionRoot, {
  preserveTimestamps: true,
  recursive: true,
  // Filter out git metadata, node_modules and possible root - level .md's as to not screw up documentation toc (and so we don't get accidental git submodules)
  filter: (src) => {
    const dirname = path.dirname(src);

    // ignore the windows "extended path" \\?\ at the beginning of the string the path returns. *sigh*
    const dirnameWithoutWinPrefix = dirname.substring(dirname.indexOf(pathToDocumentationRepository));
    // filter out .git* , node_modules and .md documents in the root (such as SECURITY.md, LICENCE.md and some such)
    return !path.basename(src).startsWith('.git') &&
      !path.basename(src).startsWith('node_modules') &&
      !(dirnameWithoutWinPrefix === pathToDocumentationRepository && path.extname(src) === '.md');
  }
});
console.log('Initialized docs for version ' + version);

// https://github.com/oskariorg/oskari-frontend
const pathToFrontendRepository = path.join(pathToExternalRepos, 'oskari-frontend/');
const pathToServerRepository = path.join(pathToExternalRepos, 'oskari-server/');
// const pathToBundlesDocumentation = path.join(pathToVersionRoot, '2 Application functionality/');

/*
* Generate section 11 of documentation
*/
const changeLogNumber = getNextRunningNumber(pathToVersionRoot);
const pathToNewFiles = path.join(pathToVersionRoot, '/' + changeLogNumber + ' Changelog');
// Init folder and heading file
fs.mkdirSync(pathToNewFiles, {recursive: true});

const mdContent = `
# Changelog

In the following paragraphs we've listed an aggregated result of changes specific to this version of Oskari. Following the links below you can access full notes of different components.

- [Oskari frontend release notes](https://github.com/oskariorg/oskari-frontend/blob/master/ReleaseNotes.md)
- [Oskari server release notes](https://github.com/oskariorg/oskari-server/blob/master/ReleaseNotes.md)
- [Migration guide](https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md)
`;

fs.writeFileSync(path.join(pathToNewFiles, "Changelog.md"), mdContent);

// Create a summary section highlighting the changes in new version from these files
const filesToHandle = {
  "Frontend release notes": path.join(pathToFrontendRepository, 'ReleaseNotes.md'),
  "Frontend changelog": path.join(pathToFrontendRepository, 'api/CHANGELOG.md'),
  "Server release notes": path.join(pathToServerRepository, 'ReleaseNotes.md'),
  "Migration guide": path.join(pathToServerRepository, 'MigrationGuide.md')
}

// Go through the files one by one
for (const [sectionTitle, frontendPath] of Object.entries(filesToHandle)) {
  const sectionFile = path.join(pathToNewFiles, `${sectionTitle}.md`);
  // Read the file, take the content corresponding to version
  fileContent = fs.readFileSync(frontendPath, 'utf-8');
  const start = fileContent.indexOf(version);
  if (start < 0) {
    console.log(`No mention of version ${version} in ${frontendPath}`);
  } else {
    // Find end of section, otherwise take the rest of the file
    const end = fileContent.indexOf('\n## ', start + version.length) || content.length - 1;
    const section = fileContent.slice(start + version.length, end).trim();
    // Write each section to the log file
    fs.writeFileSync(`${sectionFile}`, `# ${sectionTitle}\n\n${section}`);
  }
}

// isLatest and version not 'latest -> clean up old 'latest' folder and copy version contents to 'latest'
if (isLatest === 'true' && version !== LATEST_VERSION) {
  const latestPath = path.normalize(path.join(__dirname, '/../_content/docs/latest'));
  if (fsExtra.existsSync(latestPath)) {
    fsExtra.rmSync(latestPath, { recursive: true });
    fsExtra.mkdirSync(latestPath);
  }
  fsExtra.copySync(pathToVersionRoot, path.normalize(path.join(__dirname, '../_content/docs/latest')));
}
