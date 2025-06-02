const express = require('express');
const router = express.Router();

const {
  fetchMovie,
  addMovies,
  editMovie,
  deleteMovie,
  singleFetch,
} = require('../controllers/movieController');

// Routes for movie APIs
router
  .route('/movies')
  .get(fetchMovie) // Get all movies
  .post(addMovies); // Add a new movie

router
  .route('/movies/:id')
  .patch(editMovie) // Edit a movie by ID
  .delete(deleteMovie)
  .get(singleFetch); // Delete a movie by ID

module.exports = router;
