const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { generateDocumentationMetadata } = require('./documentationMetadataHelper');

// add index files for blogs etc
execSync('node scripts/generateContentMetadata.js');

// So build on GitHub Actions can work without cloning the documentation folders
const generateDummyDocs = (folder, addIndex = true) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
    
    addIndex && generateDocumentationMetadata(folder);
    
};

generateDummyDocs('./_content/api/versions/');
generateDummyDocs('./_content/docs/latest', false);
generateDummyDocs('./_content/docs/');
const indexContent = `
const allDocs = ['latest'];
export default allDocs;
`;
fs.writeFileSync(path.join('./_content/docs/latest/', 'index.js'), indexContent);
