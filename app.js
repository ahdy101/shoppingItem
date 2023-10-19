const express = require('express');

const app = express();

const shoppingList = [];

// Add a new item to the shopping list with the name "Milk" and the price 2.50.
shoppingList.push({
  name: 'Milk',
  price: 2.50,
});

// Add a new item to the shopping list with the name "Eggs" and the price 1.50.
shoppingList.push({
  name: 'Eggs',
  price: 1.50,
});
// GET /items
app.get('/items', (req, res) => {
  res.json(shoppingList);
});

// POST /items
app.post('/items', (req, res) => {
  const newItem = {
    name: req.body.name,
    price: parseFloat(req.body.price),
  };

  shoppingList.push(newItem);

  res.json(newItem);
});

// GET /items/:id
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const item = shoppingList[id];

  res.json(item);
});

// PATCH /items/:id
app.patch('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const item = shoppingList[id];

  item.name = req.body.name || item.name;
  item.price = parseFloat(req.body.price) || item.price;

  res.json(item);
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  shoppingList.splice(id, 1);

  res.json({});
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
