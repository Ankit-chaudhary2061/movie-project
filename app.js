const express = require('express');
// const {
//   editBooks,
//   deleteBooks,
//   addBooks,
//   fetchedBooks,
// } = require('./controllers/bookController');/ yo paxi remove hunxa
const bookRoutes = require('./routes/bookRoutes');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the database
require('./Database/connection');

// // Routes
// app.get('/books', fetchedBooks);

// app.post('/books', addBooks);

// app.delete('/books/:id', deleteBooks);

// app.patch('/books/:id', editBooks);
app.use('/api', bookRoutes);
app.listen(7000, () => {
  console.log('✅ Server is running successfully on port 7000');
});
