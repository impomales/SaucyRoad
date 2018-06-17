const express = require('express');
const app = express();

const PORT = process.env.PORT || 1337;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('index.html');
})

app.listen(PORT, () => {
  console.log(`app listening swimingly on port ${PORT}`);
})
