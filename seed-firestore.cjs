const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const path = require('path');

// Read Firebase config
const configPath = path.join(__dirname, 'firebase-applet-config.json');
if (!fs.existsSync(configPath)) {
  console.error("firebase-applet-config.json not found!");
  process.exit(1);
}
const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const projectId = firebaseConfig.projectId;

// Initialize Admin App
admin.initializeApp({
  projectId: projectId,
});

// Configure Firestore to use the (default) database
const db = getFirestore();

const IMAGES = {
  "logo.jpg": "https://i.postimg.cc/2SLmvRmw/lord-shiva-face-silhouette-lord-shiva-logo-icon-illustration-silhouette-and-line-art-lord-shiva-face.jpg",
  "priest.webp": "https://i.postimg.cc/CK1qgKV4/Jyotirlinga-Connection-to-Rudraksha-min.webp",
  "kalsarp-puja.jpg": "https://i.postimg.cc/1X2rv2VF/kalsarp-puja.jpg",
  "narayan-naagbali.jpg": "https://i.postimg.cc/Kz3mwp9y/narayan-naagbali.jpg",
  "tripindi.jpg": "https://i.postimg.cc/3J1QSHKH/tripindi.jpg",
  "mahamrityunjay.jpg": "https://i.postimg.cc/CxCSVfHq/mahamrityunjay.jpg",
  "rudrabhishek.jpg": "https://i.postimg.cc/QxXRWncR/rudrabhishek.jpg",
  "pitrudosh.jpg": "https://i.postimg.cc/mDKgrWcb/pitrudosh.jpg",
  "navgrah.jpg": "https://i.postimg.cc/c4wrrCBW/navgrah.jpg",
  "mangal-dosh.png": "https://i.postimg.cc/52WQ3LNG/mangal-dosh.png",
  "online.jpg": "https://i.postimg.cc/7P9b8d9g/online.jpg",
  "bramahagiri.webp": "https://i.postimg.cc/jS5RH1QS/bramahagiri.webp",
  "main-photo.png": "https://i.postimg.cc/yd7QRMct/main-photo.png",
  "gallery1.jpg": "https://i.postimg.cc/D0HPxH4y/gallery1.jpg",
  "gallery2.jpg": "https://i.postimg.cc/PJ9QS9vN/gallery2.jpg",
  "gallery3.jpg": "https://i.postimg.cc/L5w3xwgn/gallery3.jpg",
  "galllery4.jpg": "https://i.postimg.cc/C5XscXnZ/galllery4.jpg",
  "gallery7.jpg": "https://i.postimg.cc/vTkt0kx4/gallery7.jpg"
};

async function seed() {
  console.log(`Seeding images mapping to (default) database in project "${projectId}"...`);
  const docRef = db.collection('config').doc('images');
  await docRef.set(IMAGES);
  console.log("Firestore (default) seeding completed successfully!");
}

seed().catch(err => {
  console.error("Firestore seeding failed:", err);
  process.exit(1);
});
