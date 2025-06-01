const express = require('express');
const { movies } = require('./Database/connection');
const app = express();

require('./Database/connection');

app.get('/movies', async (req, res) => {
  const datas = await movies.findAll();
  res.json({
    message: 'Successfully updated',
    datas,
  });
});
app.post('/movies', (req, res) => {
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
