const movieModel = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    movieTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieGenre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    movieReleaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    movieDuration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    movieLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieReviewText: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '', // or some default text like 'No review yet'
    },

    movieRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // or some default rating you want, e.g., 3
      validate: {
        min: 1,
        max: 5,
      },
    },
  });

  return movie;
};

module.exports = movieModel;
