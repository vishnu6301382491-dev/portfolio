const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const portfolioDir = path.join(outDir, 'portfolio');

if (fs.existsSync(outDir) && !fs.existsSync(portfolioDir)) {
  try {
    fs.symlinkSync(outDir, portfolioDir, 'junction');
    console.log('Created junction out/portfolio -> out');
  } catch (e) {
    console.warn('Symlink failed, falling back to copy:', e.message);
  }
}
