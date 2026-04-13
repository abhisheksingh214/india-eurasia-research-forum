import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const extensions = ['.jpg', '.jpeg', '.png'];

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (extensions.includes(path.extname(file).toLowerCase())) {
      const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = path.join(directory, outputName);

      console.log(`Processing: ${file} -> ${outputName}`);

      try {
        const metadata = await sharp(fullPath).metadata();

        await sharp(fullPath)
          .resize({
            width: Math.round(metadata.width * 1.5), // 1.5x upscale for improved crispness
            kernel: sharp.kernel.lanczos3,
            withoutEnlargement: false
          })
          .sharpen({
             sigma: 1.2,
             m1: 0.5,
             m2: 0.5,
             x1: 2,
             y2: 10,
             y3: 20
          })
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);

        // Optionally remove old file if everything succeeded
        // fs.unlinkSync(fullPath); 
      } catch (err) {
        console.error(`Failed to process ${file}:`, err);
      }
    }
  }
}

console.log('--- Starting Image Optimization (Upscale & WebP) ---');
processDirectory(inputDir).then(() => {
  console.log('--- Finished Image Optimization ---');
}).catch(console.error);
