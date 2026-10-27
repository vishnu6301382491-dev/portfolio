const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('Created out/.nojekyll');
}
