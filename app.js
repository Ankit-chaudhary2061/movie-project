const express = require('express');
const app = express();

require('./Database/connection');

app.get('/movie', (req, res) => {
  res.json({
    message: 'Successfully updated',
  });
});
app.post('/movie', (req, res) => {
  res.json({
    message: 'Successfully updated',
  });
});
app.delete('/movie/:id', (req, res) => {
  res.json({
    message: 'Successfully  deleted',
  });
});
app.patch('/movie/:id', (req, res) => {
  res.json({
    message: 'Successfully updated edited',
  });
});
//postgres.rsgxksinuesquzmwolfj:abacodehanu@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

postgresql: app.listen(4500, () => {
  console.log('🚀 Your server has started on port 4500');
});
