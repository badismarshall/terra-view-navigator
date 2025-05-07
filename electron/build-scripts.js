
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Building Electron application...');

// First build the React app
console.log('Building React app...');
execSync('npm run build', { stdio: 'inherit' });

// Then build the Electron app with electron-builder
console.log('Building Electron distribution...');
execSync('electron-builder --config electron/electron-builder.config.js', { stdio: 'inherit' });

console.log('Electron build completed successfully!');
