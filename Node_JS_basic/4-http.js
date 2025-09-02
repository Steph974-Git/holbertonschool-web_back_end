const http = require('http');

const app = http.createServer((req, res) => {
  // Définit le type de contenu comme texte brut
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Envoie la réponse pour n'importe quel endpoint
  res.end('Hello Holberton School!');
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// Exporte l'app pour pouvoir l'utiliser ailleurs
module.exports = app;
