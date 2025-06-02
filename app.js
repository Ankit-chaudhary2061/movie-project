const express = require('express');
// const { movies } = require('./Database/connection');
// like yo chai tweyo  movies controler bata leuda chai yo code testo used hudaina so yeslai delete garna milcxa  but maelay yeslai commment out garyako xau
// yo file chai yeta in used va xaean like  twweyo hami ley create haru key haru arko thau ma used va ca in controller ma used vako xa ni
// const {
//   fetchMovie,
//   addMovies,
//   deleteMovie,
//   editMovie,
// } = require('./controllers/bookController');
// yo ni delete garney kina ki paila ko tweoo
const movieRoutes = require('./routes/movieRoutes');
const app = express();

require('./Database/connection');
app.use(express.json());
// app.get('/movies', fetchMovie);
// app.post('/movies', addMovies);
// app.delete('/movies/:id', deleteMovie);
// app.patch('/movies/:id', editMovie);
// yo chai aba remove garda nin hunxa kina ki yesko code haru controler ma chai twyeo yesko logical code haru hunxa haiexports.addMovies = async (req, res) => {
// const {
//   movieTitle,
//   movieGenre,
//   movieDescription,
//   movieReleaseDate,
//   movieDuration,
//   movieLanguage,
// } = req.body;
// yo mathi ko chai post man ma ko requst body ma hold garyra  rakhaya ko

//   await movies.create({
//     // yesma ma chai twyeo create garna lai used hunca like left side ma chai coloum ho ani right side ko chai value ho like post man ma set vako wala vakue if value ra colum ko name same xa vanya double value rakhnu pardain eutai ma rakhya vayao
//     movieTitle,
//     movieGenre,
//     movieDescription,
//     movieReleaseDate,
//     movieDuration,
//     movieLanguage,
//   });

//   res.json({ message: 'Movie added successfully.' });
// }; ani  routes ma chai tai api link router.route('/movies').get(fetchMovie).post(addMovies);
// router.route('./movies/:id').patch(editMovie).delete(deleteMovie);
//postgres.rsgxksinuesquzmwolfj:abacodehanu@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

app.use('/api', movieRoutes);
postgresql: app.listen(4500, () => {
  console.log('🚀 Your server has started on port 4500');
});
