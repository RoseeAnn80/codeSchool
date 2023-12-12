const express = require('express');
const app = express();
const port = 3000;

// Definice cesty pro hlavní stránku
app.get('/', (req, res) => {
  res.send('Vítejte na hlavní stránce!');
});

// Definice cesty pro další stránky - rozdělená stromů pod ID 
app.get('/page1', (req, res) => {
  res.send('Obsah stránky 1');
});

app.get('/page2', (req, res) => {
  res.send('Obsah stránky 2');
});

// Další definice cest a obsahu stránek

app.listen(port, () => {
  console.log(`Server běží na portu ${port}`);
});