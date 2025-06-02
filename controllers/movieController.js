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
  } = req.body;
  // yo mathi ko chai post man ma ko requst body ma hold garyra  rakhaya ko

  await movies.create({
    // yesma ma chai twyeo create garna lai used hunca like left side ma chai coloum ho ani right side ko chai value ho like post man ma set vako wala vakue if value ra colum ko name same xa vanya double value rakhnu pardain eutai ma rakhya vayao
    movieTitle,
    movieGenre,
    movieDescription,
    movieReleaseDate,
    movieDuration,
    movieLanguage,
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
  } = req.body;

  await movies.update(
    {
      movieTitle,
      movieGenre,
      movieDescription,
      movieReleaseDate,
      movieDuration,
      movieLanguage,
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
