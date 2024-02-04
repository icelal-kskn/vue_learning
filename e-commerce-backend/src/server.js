import express from 'express';
import {MongoClient} from 'mongodb';


const app=express();
app.use(express.json());

const PORT = 8000;
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'vue-db';
let products=[]; 

async function connectToDatabase() {
  const client = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('vue-db');
  products = await db.collection('products').find({}).toArray();
  return client;
}

app.get('/api/products', async (req, res) => {
    try {
      const client = await connectToDatabase();
      const products = await client.db(DB_NAME).collection('products').find({}).toArray();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      client.close();
    }
  });

  
  app.get('/api/users/:userId/cart', async (req, res) => {
    try {
      const { userId } = req.params;
      const client = await connectToDatabase();
      const db = client.db(DB_NAME);
  
      const user = await db.collection('users').findOne({ id: userId });
      if (!user) return res.status(404).json('Could not find user!');
  
      const products = await db.collection('products').find({}).toArray();
      const cartItemIds = user.cartItems;
      const cartItems = cartItemIds.map(id => products.find(product => product.id === id));
  
      res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      client.close();
    }
  });
  
  
  app.get('/api/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);

    const product = await db.collection('products').findOne({ id: productId });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json('Could not find the product!');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.close();
  }
});


app.post('/api/users/:userId/cart', async (req, res) => {
    try {
      const { userId } = req.params;
      const { productId } = req.body;
      const client = await connectToDatabase();
      const db = client.db(DB_NAME);
  
      await db.collection('users').updateOne({ id: userId }, { $addToSet: { cartItems: productId } });
  
      const user = await db.collection('users').findOne({ id: userId });
      const cartItemIds = user.cartItems;
      const cartItems = cartItemIds.map(id => products.find(product => product.id === id));
  
      res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      client.close();
    }
  });
  
  
  app.delete('/api/users/:userId/cart/:productId', (req, res) => {
    try {
      const { productId } = req.params;
      // Assuming cartItems is a global variable, make sure to initialize it before using.
      cartItems = cartItems.filter(product => product.id !== productId);
      res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });