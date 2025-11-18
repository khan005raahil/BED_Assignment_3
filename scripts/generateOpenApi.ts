import fs from 'fs';
import path from 'path';


const swaggerSpec: any = require('../src/swagger');

async function run() {
  const outDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const outFile = path.join(outDir, 'openapi.json');
  fs.writeFileSync(outFile, JSON.stringify(swaggerSpec, null, 2), { encoding: 'utf8' });
  console.log('Generated', outFile);
}

run().catch(err => {
  console.error('Error generating OpenAPI JSON:', err);
  process.exit(1);
});
