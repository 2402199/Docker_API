const express = require('express');
const app = express();
const port = 3000;

// Sample data to simulate a database
const users = [
  { id: 1, name: 'Jerry' },
  { id: 2, name: 'Joel' },
  { id: 3, name: 'Akash' }
];

// Route to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Route to get a single user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
