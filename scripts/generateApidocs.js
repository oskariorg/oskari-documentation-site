/*eslint @typescript-eslint/no-var-requires: 0*/
const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const { generateDocumentationMetadata, getSubdirectories } = require('./documentationMetadataHelper');
const LATEST_VERSION = 'latest';

function copyContent(source, destination) {
  if (!fs.existsSync(source)) {
    console.log("Source folder not found.");
    return;
  }

  // remove old folder if existis (avoid duplicated stuff)
  if (fs.existsSync(destination)) {
    fsExtra.rmSync(destination, { recursive: true });
  }

  fs.mkdirSync(destination, { recursive: true });

  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
        copyContent(sourcePath, destPath);
    } else {
        fs.copyFileSync(sourcePath, destPath);
    }
  });
}

function getMdDesc(fileContent) {
  // reads text after the first heading in md file and stops at either line change or EOF
  const match = fileContent.match(/#\s+(.*)\r?\n\r?\n([^]*?)(?=\r?\n\r?\n|$)/);
  if (match && match.length > 1) {
    // if the content that follows after the first heading if another heading, just return empty (=there is no paragraph marking the short description)
    if (!match[2].startsWith('#')) {
      return match[2];
    }
  }

  return '';
}

function parseNameFromHeading(fileContent) {
  const regex = /^#\s+(.*?)$/m;
  const match = regex.exec(fileContent);

  if (match && match.length > 1) {
      const headingContent = match[1].replace(/\[.*?\]/g, '').trim();
      return headingContent;
  } else {
      return null;
  }
}
function hasTag(fileContent, tag) {
  // Find the first heading and see if it contains the tag
  const match = fileContent.match(/#\s+(.*)/);
  if (match && match[1].includes(tag)) {
      return true;
  } else {
      return false;
  }
}

function generateRequestsOrEvents(fullPath, moduleName, bundleName, type) {
  // type = request | event
  const itemTypePath = path.join(fullPath, moduleName, bundleName, type);
  if (!fs.existsSync(itemTypePath)) {
    return;
  }

  const files = fs.readdirSync(itemTypePath);
  const results = [];
  files.forEach(file => {

    if (file.indexOf('.md') > -1) {
      const mdPath = path.join(itemTypePath, file);
      const fileContent = fs.readFileSync(mdPath, 'utf8');
      const item = {
        name: parseNameFromHeading(fileContent),
        desc: getMdDesc(fileContent),
        path: path.normalize(path.join(moduleName, bundleName, type, file)),
        rpc: hasTag(fileContent, '[rpc]'),
        bundle: bundleName,
        ns: moduleName
      };
      results.push(item);
    }
  })

  return results;
}

function generateBundlesList(fullPath, moduleName) {

  const bundles = [];
  const modulePath = path.join(fullPath, moduleName);
  const bundleNames = getSubdirectories(modulePath);

  bundleNames.forEach((bundleName) => {
    const fileContent = fs.readFileSync(path.join(modulePath, bundleName, 'bundle.md'), 'utf-8');
    bundles.push({
      name: parseNameFromHeading(fileContent),
      desc: getMdDesc(fileContent),
      path: path.normalize(path.join(moduleName, bundleName)),
      requests: generateRequestsOrEvents(fullPath, moduleName, bundleName, 'request'),
      events: generateRequestsOrEvents(fullPath, moduleName, bundleName, 'event')
    })
  })

  return bundles;

}

function generateApiJson(fullPath) {

  const modules = getSubdirectories(fullPath);
  const bundlesJSON = [];
  modules.forEach(module => bundlesJSON.push({
    name: module,
    bundles: generateBundlesList(fullPath, module)
  }));
  return bundlesJSON;
}

//copy images under public/assets etc
function copyImagesRecursively(sourceDir, destinationDir) {
  const sourceDirFullpath = path.join(process.cwd(), sourceDir);
  const destinationDirFullpath = path.join(process.cwd(), destinationDir);

  if (!fs.existsSync(sourceDirFullpath)) {
    return;
  }

  fs.readdirSync(sourceDirFullpath).forEach(item => {
    const sourceItemPath = path.join(sourceDir, item);
    const destinationItemPath = path.join(destinationDir, item);

    const sourceItemFullPath = path.join(process.cwd(), sourceDir, item);
    const destinationItemFullPath = path.join(process.cwd(), destinationDir, item);

    if (fs.statSync(sourceItemFullPath).isDirectory()) {
      copyImagesRecursively(sourceItemPath, destinationItemPath);
    } else {
      if (item.match(/\.(jpg|jpeg|png|gif)$/i)) {
        if (!fs.existsSync(destinationDirFullpath)) {
            fs.mkdirSync(destinationDirFullpath, { recursive: true});
        }

        // copy image
        fs.copyFileSync(sourceItemFullPath, destinationItemFullPath);
        // console.log(`copied image: ${sourceItemFullPath} --> ${destinationDirFullpath}`);
      }
    }
  });
}

function syncResourcesByVersion(sourcePath, destinationPath) {
  const fullSourcePath = path.normalize(path.join(process.cwd(), sourcePath));
  const subdirectories = getSubdirectories(fullSourcePath);
  for (const version of subdirectories) {
    copyImagesRecursively(sourcePath + version, destinationPath + version);
  }
}

/** API docs metadata generation */
// npm run apidocs 2.13.0
const version = process.argv.slice(2)[0];
const isLatest = process.argv.slice(2)[1];


/** Copy the content from under oskari-frontend */
const apidocsFullpath = './_content/api/versions/';
const relativeUrlToContent = path.normalize(path.join(process.cwd(), apidocsFullpath));
if (!fs.existsSync(relativeUrlToContent)) {
  // create base dir if not available
  fs.mkdirSync(relativeUrlToContent, { recursive: true });
}

const sourceDirectoryRelative = '../oskari-frontend/api';
const destinationDirectoryRelative = apidocsFullpath+version+'/';
const sourcePath = path.join(process.cwd(), sourceDirectoryRelative);
const destinationPath = path.join(process.cwd(), destinationDirectoryRelative);
copyContent(sourcePath, destinationPath);

/** write availableversions json */
generateDocumentationMetadata(apidocsFullpath);

/** write the full api object with requests and events. Not sure we need this for anything...?*/
const apiJSON = generateApiJson(destinationPath);
fs.writeFileSync(path.join(destinationPath, 'api.json'), JSON.stringify(apiJSON, null, 2));

let requests = [];
let events = [];
apiJSON.forEach(module => {
  module.bundles.forEach(bundle => {
    if (bundle?.requests) {
      requests = requests.concat(bundle.requests)
    }

    if (bundle?.events) {
      events = events.concat(bundle.events);
    }
    delete bundle.events;
    delete bundle.requests;
  });
});

/** write metadata for bundles, events and requests */
fs.writeFileSync(path.join(destinationPath, 'bundles.json'), JSON.stringify(apiJSON, null, 2));
fs.writeFileSync(path.join(destinationPath, 'events.json'), JSON.stringify(events, null, 2));
fs.writeFileSync(path.join(destinationPath, 'requests.json'), JSON.stringify(requests, null, 2));

// isLatest and version not 'latest -> clean up old 'latest' folder and copy version contents to 'latest'
if (isLatest === 'true' && version !== LATEST_VERSION) {
  const latestDestinationPath = apidocsFullpath +'latest/';
  copyContent(destinationPath, latestDestinationPath);
}


/** copy apidoc images*/
const resourcesRootSourceDir = '/_content/api/versions/';
const resourcesCopyPath = '/public/assets/api/';
syncResourcesByVersion(resourcesRootSourceDir, resourcesCopyPath);
