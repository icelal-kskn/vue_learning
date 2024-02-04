import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';


const app=express();
app.use(bodyParser.json());

app.get('/api/products', async (req, res) => {
    const client = await MongoClient.connect(
      'mongodb://localhost:27017',
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = client.db('vue-db');
    const products = await db.collection('products').find({}).toArray();
    res.status(200).json(products);
    client.close();
  });
  
  app.get('/api/users/:userId/cart', async (req, res) => {
    const { userId } = req.params;
    const client = await MongoClient.connect(
      'mongodb://localhost:27017',
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = client.db('vue-db');  
    const user = await db.collection('users').findOne({ id: userId });
    if (!user) return res.status(404).json('Could not find user!');
    const products = await db.collection('products').find({}).toArray();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id =>
      products.find(product => product.id === id));
    res.status(200).json(cartItems);
    client.close();
  });
  
  app.get('/api/products/:productId', async (req, res) => {
      const { productId } = req.params;
      const client = await MongoClient.connect(
        'mongodb://localhost:27017',
        { useNewUrlParser: true, useUnifiedTopology: true },
      );
      const db = client.db('vue-db');
      const product = await db.collection('products').findOne({ id: productId });
      if (product) {
          res.status(200).json(product);
      } else {
          res.status(404).json('Could not find the product!');
      }
      client.close();
  });
  
  app.post('/api/users/:userId/cart', async (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body;
    const client = await MongoClient.connect(
      'mongodb://localhost:27017',
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = client.db('vue-db');
    await db.collection('users').updateOne({ id: userId }, {
      $addToSet: { cartItems: productId },
    });
    const user = await db.collection('users').findOne({ id: userId });
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
    res.status(200).json(cartItems);
    client.close();
  });
  
  app.delete('/api/users/:userId/cart/:productId', (req, res) => {
    const { productId } = req.params;
    cartItems = cartItems.filter(product => product.id !== productId);
    res.status(200).json(cartItems);
  });
  
  app.listen(8000, () => {
      console.log('Server is listening on port 8000');
  });