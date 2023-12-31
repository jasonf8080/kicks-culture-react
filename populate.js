 import {readFile} from 'fs/promises';
 import dotenv from 'dotenv';
 dotenv.config();

 import connectDB from './db/connect.js';
 import Product from './models/Product.js';

 export const populate = async() => {
     try {
         await connectDB(process.env.MONGO_URL);
         await Product.deleteMany();
         const jsonProducts = JSON.parse(await readFile(new URL('./sneakers.json', import.meta.url)));
         await Product.create(jsonProducts);
         console.log('success')
         process.exit(0)
     } catch (error) {
         console.log(error)
         process.exit(1)
     }
 }


 // start();