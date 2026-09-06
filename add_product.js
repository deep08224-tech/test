import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log('\n==========================================');
  console.log('      PARADISE OPTICS: ADD PRODUCT TOOL   ');
  console.log('==========================================\n');

  const name = await askQuestion('1. Enter Product Name (e.g. Prada Classic Retro): ');
  if (!name.trim()) {
    console.log('Product name cannot be empty!');
    process.exit(0);
  }

  const brand = await askQuestion('2. Enter Brand Name (e.g. Prada, Ray-Ban, IDEE): ');
  
  console.log('\nSelect Category:');
  console.log(' [1] eyeglasses');
  console.log(' [2] sunglasses');
  console.log(' [3] contact-lenses');
  const catChoice = await askQuestion('Choose category [1-3]: ');
  let category = 'eyeglasses';
  if (catChoice === '2') category = 'sunglasses';
  if (catChoice === '3') category = 'contact-lenses';

  const subCategory = await askQuestion('4. Enter Sub-category (e.g. Round, Aviator): ');
  
  const priceInput = await askQuestion('5. Enter Retail Price in ₹ (number only): ');
  const price = parseInt(priceInput) || 2000;

  const discInput = await askQuestion('6. Enter Discount Price in ₹ (number only): ');
  const discountPrice = parseInt(discInput) || price;

  console.log('\nSelect Gender:');
  console.log(' [1] Unisex');
  console.log(' [2] Men');
  console.log(' [3] Women');
  const genChoice = await askQuestion('Choose gender [1-3]: ');
  let gender = 'Unisex';
  if (genChoice === '2') gender = 'Men';
  if (genChoice === '3') gender = 'Women';

  const frameShape = await askQuestion('8. Enter Frame Shape (e.g. Round, Rectangle, Aviator): ');
  const frameColor = await askQuestion('9. Enter Frame Color (e.g. Matte Black, Gold, Tortoise): ');
  const frameMaterial = await askQuestion('10. Enter Frame Material (e.g. Acetate, Titanium, TR90): ');
  
  const imageInput = await askQuestion('11. Enter image filename or Supabase URL (e.g. /products/7.png): ');
  const image = imageInput.trim() || '/products/new3.png';

  const description = await askQuestion('12. Enter Product Description: ');

  // Read productsData.js
  const dbPath = path.join('src', 'data', 'productsData.js');
  if (!fs.existsSync(dbPath)) {
    console.log(`Error: Database file not found at ${dbPath}`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(dbPath, 'utf8');

  // Calculate Next ID
  let idPrefix = 'eye';
  if (category === 'sunglasses') idPrefix = 'sun';
  if (category === 'contact-lenses') idPrefix = 'cnt';

  const regex = new RegExp(`"id":\\s*"${idPrefix}-(\\d+)"`, 'g');
  let match;
  let maxId = 0;
  while ((match = regex.exec(fileContent)) !== null) {
    const num = parseInt(match[1]);
    if (num > maxId) maxId = num;
  }
  const nextId = `${idPrefix}-${maxId + 1}`;

  // Build product object
  const newProductObj = {
    id: nextId,
    name: name.trim(),
    brand: brand.trim(),
    category: category,
    subCategory: subCategory.trim(),
    price: price,
    discountPrice: discountPrice,
    rating: 5.0,
    reviewsCount: 0,
    gender: gender,
    frameShape: frameShape.trim(),
    frameColor: frameColor.trim(),
    frameMaterial: frameMaterial.trim(),
    lensCompatibility: "Single Vision, Progressive, Blue Cut",
    size: "Medium",
    sizeInfo: "Lens Width: 52mm, Bridge: 18mm",
    description: description.trim() || `${brand.trim()} premium quality product.`,
    inStock: true,
    images: [image],
    features: [
      "Lightweight styling",
      "Ergonomic bridge adjustments"
    ]
  };

  // Find where the PRODUCTS array ends (look for the "export const BRANDS =" string)
  const brandsIndex = fileContent.indexOf('export const BRANDS =');
  if (brandsIndex === -1) {
    console.log('Error: BRANDS array not found in database file!');
    process.exit(1);
  }

  const productsPart = fileContent.slice(0, brandsIndex);
  const lastClosingBracketIndex = productsPart.lastIndexOf('];');

  if (lastClosingBracketIndex === -1) {
    console.log('Error: Could not find products closing bracket!');
    process.exit(1);
  }

  // Format object string
  const formattedObj = '  ,\n  ' + JSON.stringify(newProductObj, null, 2).split('\n').join('\n  ') + '\n';
  
  // Inject and save
  const updatedContent = fileContent.slice(0, lastClosingBracketIndex) + formattedObj + fileContent.slice(lastClosingBracketIndex);
  fs.writeFileSync(dbPath, updatedContent, 'utf8');

  console.log(`\n==========================================`);
  console.log(`🎉 SUCCESS! Product Added Safely!`);
  console.log(`👉 ID assigned: ${nextId}`);
  console.log(`👉 Name: ${name.trim()}`);
  console.log(`👉 File location: src/data/productsData.js`);
  console.log(`==========================================\n`);

  rl.close();
}

main().catch(err => {
  console.error(err);
  rl.close();
});
