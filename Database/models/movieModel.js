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
      allowNull: true,
    },
    movieDuration: {
      type: DataTypes.INTEGER, // Duration in minutes
      allowNull: true,
    },
    movieReleaseDate: {
      type: DataTypes.DATEONLY, // More appropriate than STRING
      allowNull: true,
    },
    movieLanguage: {
      type: DataTypes.STRING, // More appropriate than STRING
      allowNull: true,
    },
  });
  return movie;
};
module.exports = movieModel;
