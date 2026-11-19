const fs = require('node:fs');
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
console.log('Dashboard listo en dist/index.html');
