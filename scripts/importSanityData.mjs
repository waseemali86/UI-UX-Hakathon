import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2021-08-31',
});

// Function to upload images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error.message);
    return null;
  }
}

// Function to import data from API to Sanity
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://template-0-beta.vercel.app/api/product'); // Replace with your API URL
    const products = response.data;

    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.title}`);

      // Upload image and get reference
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Prepare product object for Sanity
      const sanityProduct = {
        _id: `product-${product.id}`, // Use a unique ID based on the API product ID
        _type: 'product',
        id: product.id.toString(),
        name: product.name,
        imagePath: product.image
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
        price: product.price,
        description: product.description,
        discountPercentage: 0, // Set default discount
        isFeaturedProduct: false, // Default value for featured product
        stockLevel: 100, // Default stock level
        category: product.category,
      };

      // Upload product to Sanity
      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.createOrReplace(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error.message);
  }
}

// Start the import process
importData();
