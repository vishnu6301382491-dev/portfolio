const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('Created out/.nojekyll');

  const haldorenSrc = path.join(outDir, 'haldoren.html');
  const haldorenDir = path.join(outDir, 'haldoren');
  if (fs.existsSync(haldorenSrc)) {
    if (!fs.existsSync(haldorenDir)) {
      fs.mkdirSync(haldorenDir, { recursive: true });
    }
    fs.copyFileSync(haldorenSrc, path.join(haldorenDir, 'index.html'));
    console.log('Created out/haldoren/index.html');
  }
}
