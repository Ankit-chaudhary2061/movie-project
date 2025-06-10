const { books } = require('../Database/connection');

exports.fetchedBooks = async (req, res) => {
  const booksData = await books.findAll();
  res.json({
    message: 'Books fetched successfully',
    data: booksData,
  });
};

exports.addBooks = async (req, res) => {
  const {
    bookTitle,
    bookAuthor,
    bookReleaseDate,
    bookGenre,
    bookStory,
    bookPrice,
  } = req.body;

  await books.create({
    bookTitle,
    bookAuthor,
    bookReleaseDate,
    bookGenre,
    bookStory,
    bookPrice,
  });

  res.json({ message: 'Book created successfully' });
};

exports.deleteBooks = async (req, res) => {
  const { id } = req.params;

  await books.destroy({
    where: { id },
  });

  res.json({ message: 'Book deleted successfully' });
};

exports.editBooks = async (req, res) => {
  const { id } = req.params;
  const {
    bookTitle,
    bookAuthor,
    bookReleaseDate,
    bookGenre,
    bookStory,
    bookPrice,
  } = req.body;

  await books.update(
    {
      bookTitle,
      bookAuthor,
      bookReleaseDate,
      bookGenre,
      bookStory,
      bookPrice,
    },
    {
      where: { id },
    }
  );

  res.json({ message: 'Book updated successfully' });
};

exports.singleFetchBook = async (req, res) => {
  const id = req.params.id;
  const datas = await books.findByPk(id);
  res.json({
    message: 'single book fetched sucessfully',
    datas,
  });
};
