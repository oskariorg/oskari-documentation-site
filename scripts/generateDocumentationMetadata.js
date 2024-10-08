/*eslint @typescript-eslint/no-var-requires: 0*/
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const syncResources = require('./syncResourcesFolder');
const { generateDocumentationMetadata, getSubdirectories } = require('./documentationMetadataHelper');

function sortByParagraphNumber(a, b) {
    // directories first
    if (a.isDirectory() && !b.isDirectory()) {
        return -1;
    }
    if (!a.isDirectory() && b.isDirectory()) {
        return 1;
    }

    const aParts = a.name.split('.').map(part => parseInt(part));
    const bParts = b.name.split('.').map(part => parseInt(part));

    for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
        if (aParts[i] !== bParts[i]) {
            return aParts[i] - bParts[i];
        }
    }

    return aParts.length - bParts.length;
}

/**
 * Return the content of the first heading of a markdwon file slugified.
 */
function getAnchorForFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const headingMatch = content.match(/^(#{1,3}) (.+)/m);

        if (headingMatch && headingMatch[2]) {
            const headingText = headingMatch[2].trim();
            const slug = slugify(headingText);
            return slug;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error reading file!:', error);
        return null;
    }
}

function listContentsRecursively(fullPath, docsRelativePath, results = []) {
    const filesAndDirectories = fs.readdirSync(fullPath, { withFileTypes: true });
    filesAndDirectories.sort(sortByParagraphNumber);
    filesAndDirectories.forEach(item => {
        const itemPath = path.join(fullPath, item.name);
        const itemRelativePath = path.join(docsRelativePath, item.name);
        if (item.isDirectory() && item.name !== 'resources') {
            const sectionNumber = path.basename(itemPath).split(' ')[0];
            const children = listContentsRecursively(itemPath, itemRelativePath)?.sort();
            results.push({
                slug: slugify(item.name),
                path: itemRelativePath,
                title: item.name,
                ordinal: sectionNumber,
                children: children
            });
        } else {
            if (path.extname(itemPath).toLowerCase() === '.md') {

                let fileNameWithoutExtension = path.parse(item.name).name;
                if (fileNameWithoutExtension.indexOf('-') > -1) {
                    fileNameWithoutExtension = fileNameWithoutExtension.split('-')[1] || fileNameWithoutExtension;
                }
                const slug = slugify(fileNameWithoutExtension);
                const anchor = getAnchorForFile(itemPath);
                results.push({
                    path: itemRelativePath,
                    fileName: item.name,
                    slug,
                    anchor: anchor ? anchor : null
                });
            }
        }
    });

    return results;
}

// Write metadata for each version
function processVersions(fullPath, relativeDir) {
    const subdirectories = getSubdirectories(fullPath);
    for (const version of subdirectories) {
        const versionFullPath = path.join(fullPath, version);
        const versionRelativePath = path.join(relativeDir, version);
        const versionContent = listContentsRecursively(versionFullPath, versionRelativePath);
        fs.writeFileSync(path.join(versionFullPath, 'index.js'), `const allDocs = ${JSON.stringify(versionContent, null, 2)};\n\nexport default allDocs;`);
        console.log('Wrote file ' + path.join(versionFullPath, 'index.js'));
    }
}

function syncResourcesByVersion(resourcesCopyPath, resourcesRuntimePath) {
    const subdirectories = getSubdirectories(fullPath);

    for (const version of subdirectories) {
        syncResources(resourcesCopyPath + version, resourcesRuntimePath + version);
    }
}

const docsRelativeDir = './_content/docs/';

const fullPath = path.normalize(path.join(process.cwd(), docsRelativeDir));
console.log('Generating documentation metadata for folder ', docsRelativeDir);
generateDocumentationMetadata(fullPath);
processVersions(fullPath, docsRelativeDir);

const resourcesCopyPath = '/public/assets/docs/';
syncResourcesByVersion(docsRelativeDir, resourcesCopyPath);
