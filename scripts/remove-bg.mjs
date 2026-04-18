import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, '../public/Spay.jpg');
const outputPath = path.join(__dirname, '../public/Spay.png');

const image = sharp(inputPath);
const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const threshold = 40;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r <= threshold && g <= threshold && b <= threshold) {
    data[i + 3] = 0;
  }
}

let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    if (data[i + 3] > 0) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const padding = 10;
minX = Math.max(0, minX - padding);
minY = Math.max(0, minY - padding);
maxX = Math.min(width - 1, maxX + padding);
maxY = Math.min(height - 1, maxY + padding);

const cropWidth = maxX - minX + 1;
const cropHeight = maxY - minY + 1;

await sharp(Buffer.from(data), { raw: { width, height, channels } })
  .extract({ left: minX, top: minY, width: cropWidth, height: cropHeight })
  .png()
  .toFile(outputPath);

console.log(`Done! Cropped to ${cropWidth}x${cropHeight}, saved to`, outputPath);
