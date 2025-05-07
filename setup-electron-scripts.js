
const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add the electron scripts if they don't exist
if (!packageJson.scripts['electron:dev']) {
  packageJson.scripts['electron:dev'] = 'concurrently "vite" "cross-env ELECTRON_START_URL=http://localhost:8080 electron electron/main.js"';
}

if (!packageJson.scripts['electron:build']) {
  packageJson.scripts['electron:build'] = 'node electron/build-scripts.js';
}

// Write the updated package.json file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Electron scripts have been added to package.json');
console.log('You can now run:');
console.log('- npm run electron:dev    : to start Electron in development mode');
console.log('- npm run electron:build  : to build Electron for distribution');
