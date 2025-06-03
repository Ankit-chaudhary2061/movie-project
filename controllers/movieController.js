const { movies } = require('../Database/connection');
// yeslai chai yeta dhekaunau parxa kina ki  hamro logical haru yeta used hunca ni
exports.fetchMovie = async (req, res) => {
  const datas = await movies.findAll();
  res.json({
    message: 'Successfully updated',
    datas,
  });
};
exports.addMovies = async (req, res) => {
  const {
    movieTitle,
    movieGenre,
    movieDescription,
    movieReleaseDate,
    movieDuration,
    movieLanguage,
    movieReviewText,
    movieRating,
  } = req.body;

  await movies.create({
    movieTitle,
    movieGenre,
    movieDescription,
    movieReleaseDate,
    movieDuration,
    movieLanguage,
    movieReviewText,
    movieRating,
  });

  res.json({ message: 'Movie added successfully.' });
};
exports.deleteMovie = async (req, res) => {
  const id = req.params.id;

  await movies.destroy({
    where: { id },
  });

  res.json({ message: 'Movie deleted successfully.' });
};

exports.editMovie = async (req, res) => {
  const id = req.params.id;

  const {
    movieTitle,
    movieGenre,
    movieDescription,
    movieReleaseDate,
    movieDuration,
    movieLanguage,
    movieReviewText,
    movieRating,
  } = req.body;

  await movies.update(
    {
      movieTitle,
      movieGenre,
      movieDescription,
      movieReleaseDate,
      movieDuration,
      movieLanguage,
      movieReviewText,
      movieRating,
    },
    {
      where: { id },
    }
  );

  res.json({ message: 'Movie updated successfully.' });
};

exports.singleFetch = async (req, res) => {
  const id = req.params.id;
  const datas = await movies.findByPk(id);
  res.json({
    message: 'Successfully updated single fetch',
    datas,
  });
};
// module.exports = {editMovie,deleteMovie,addMovies,fetchMovie} yo tarika  ley ni exports garna milxa natra tweyo mathi ko nam ma exports.addMovie bata exports garna milxa
