const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const path = require('path');

// Read Firebase config
const configPath = path.join(__dirname, 'firebase-applet-config.json');
if (!fs.existsSync(configPath)) {
  console.error("firebase-applet-config.json not found!");
  process.exit(1);
}
const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const bucketName = firebaseConfig.storageBucket;

if (!bucketName) {
  console.error("storageBucket not found in config!");
  process.exit(1);
}

const storage = new Storage();

async function uploadFiles() {
  const imagesDir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    console.error("public/images directory not found!");
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} images to upload to bucket ${bucketName}...`);

  const bucket = storage.bucket(bucketName);

  // We will also prepare a JSON configuration of the uploaded public URLs
  // so that we can easily write it to a config file and use it in our application.
  const uploadedUrls = {};

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) continue;

    const destination = `images/${file}`;
    console.log(`Uploading ${file} (${(stat.size / 1024).toFixed(1)} KB)...`);

    try {
      // Determine content type
      let contentType = 'image/jpeg';
      if (file.endsWith('.png')) contentType = 'image/png';
      else if (file.endsWith('.webp')) contentType = 'image/webp';

      await bucket.upload(filePath, {
        destination: destination,
        metadata: {
          contentType: contentType,
          cacheControl: 'public, max-age=31536000',
        },
      });

      // Try making it public
      try {
        await bucket.file(destination).makePublic();
        console.log(`  Made public successfully.`);
      } catch (e) {
        console.log(`  Could not set ACL (might use uniform bucket-level access): ${e.message}`);
      }

      // Generate the public HTTPS URL
      // Under standard public access, it's storage.googleapis.com/bucket/path
      const publicUrl = `https://storage.googleapis.com/${bucketName}/${destination}`;
      // Firebase Storage media URL as backup (which also works if bucket-level access is set correctly)
      const firebaseMediaUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(destination)}?alt=media`;

      uploadedUrls[file] = publicUrl;
      console.log(`  Public GCS URL: ${publicUrl}`);
      console.log(`  Firebase URL: ${firebaseMediaUrl}`);
    } catch (err) {
      console.error(`  Error uploading ${file}:`, err.message);
    }
  }

  // Save the mapping to src/firebase-images.json
  const outPath = path.join(__dirname, 'src', 'firebase-images.json');
  fs.writeFileSync(outPath, JSON.stringify(uploadedUrls, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Firebase image URL mappings to ${outPath}`);
}

uploadFiles().catch(console.error);
