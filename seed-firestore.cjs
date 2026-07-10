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
  "logo.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "priest.webp": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "kalsarp-puja.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "narayan-naagbali.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "tripindi.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "mahamrityunjay.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "rudrabhishek.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "pitrudosh.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "navgrah.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "mangal-dosh.png": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "online.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "bramahagiri.webp": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "main-photo.png": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "gallery1.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "gallery2.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "gallery3.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "galllery4.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80",
  "gallery7.jpg": "https://images.unsplash.com/photo-1602616191559-c34d88763294?w=600&q=80"
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
