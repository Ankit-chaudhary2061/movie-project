const {
  fetchedBooks,
  addBooks,
  editBooks,
  deleteBooks,
  singleFetchBook,
} = require('../controllers/bookController');

const router = require('express').Router();
router.route('/books').get(fetchedBooks).post(addBooks);
router
  .route('/books/:id')
  .patch(editBooks)
  .delete(deleteBooks)
  .get(singleFetchBook);

module.exports = router;
