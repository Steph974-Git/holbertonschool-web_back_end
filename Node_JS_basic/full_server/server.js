import express from 'express';
import router from './routes/index.js';

// Créer l'application Express
const app = express();

// Dire à Express d'utiliser les routes
app.use('/', router);

// Démarrer le serveur sur le port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Exporter l'app
export default app;
