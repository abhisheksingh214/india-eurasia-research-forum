import sharp from 'sharp';
import { statSync } from 'fs';
import path from 'path';

async function convertSVG(input, output, size) {
  try {
    await sharp(input, { density: 300 })
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90 })
      .toFile(output);
    
    const original = statSync(input).size;
    const optimized = statSync(output).size;
    const reduction = (((original - optimized) / original) * 100).toFixed(1);
    console.log(`✓ ${path.basename(input)}: ${(original/1024/1024).toFixed(1)}MB → ${(optimized/1024).toFixed(0)}KB (${reduction}% smaller)`);
  } catch(e) {
    console.error('Error converting', input, ':', e.message);
  }
}

console.log('Converting logos to optimized WebP...\n');
await convertSVG('public/logo.svg', 'public/logo.webp', 400);
await convertSVG('public/ganga-logo.svg', 'public/ganga-logo.webp', 400);
console.log('\nDone! Update your components to use .webp instead of .svg');
