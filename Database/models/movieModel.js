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
      type: DataTypes.TEXT, // Better for longer descriptions
      allowNull: true,
    },
    movieReleaseDate: {
      type: DataTypes.DATEONLY, // More appropriate than STRING
      allowNull: false,
    },
    movieDuration: {
      type: DataTypes.INTEGER, // Duration in minutes
      allowNull: true,
    },
    movieLanguage: {
      type: DataTypes.STRING, // More appropriate than STRING
      allowNull: false,
    },
  });
  return movie;
};
module.exports = movieModel;
