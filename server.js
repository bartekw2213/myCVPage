const express = require('express');
const app = express();

app.use(express.json({ extended: true }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

app.get('/', (req, res) => res.send('Server is up and running'));
app.use('/email', require('./routes/email'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
