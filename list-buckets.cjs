const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

async function main() {
  try {
    const [buckets] = await storage.getBuckets();
    console.log("Existing buckets:");
    buckets.forEach(b => console.log(`- ${b.name}`));
  } catch (err) {
    console.error("Error listing buckets:", err.message);
  }
}

main();
