const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookReleaseDate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bookGenre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bookStory: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Book;
};

module.exports = bookModel;
