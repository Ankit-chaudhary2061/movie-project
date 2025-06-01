const express = require('express');
const { movies } = require('./Database/connection');
const app = express();

require('./Database/connection');
app.use(express.json());
app.get('/movies', async (req, res) => {
  const datas = await movies.findAll();
  res.json({
    message: 'Successfully updated',
    datas,
  });
});
app.post('/movies', async (req, res) => {
  const {
    // yo chai value hai mathi postman ma aako  value ho
    movieTitle,
    movieGenre,
    movieDescription,
    movieReleaseDate,
    movieDuration,
    movieLanguage,
  } = req.body;
  await movies.create({
    // coloum = value
    movieTitle,
    movieGenre,
    movieDescription,
    movieReleaseDate,
    movieDuration,
    movieLanguage,
  });
  res.json({
    message: 'Successfully updated',
  });
});
app.delete('/movies/:id', (req, res) => {
  res.json({
    message: 'Successfully  deleted',
  });
});
app.patch('/movies/:id', (req, res) => {
  res.json({
    message: 'Successfully updated edited',
  });
});
//postgres.rsgxksinuesquzmwolfj:abacodehanu@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

postgresql: app.listen(4500, () => {
  console.log('🚀 Your server has started on port 4500');
});
