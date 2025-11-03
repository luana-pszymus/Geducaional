const express = require('express');
const cors = require('cors');
const app = express();

// Permitir CORS
app.use(cors());

// Rotas
app.use('/api', require('./routes/dashboard'));

// Importar rotas
const dashboardRoutes = require('./routes/dashboard');
app.use('/api/dashboard', dashboardRoutes);

app.listen(3000, () => {
    console.log('Backend rodando em http://localhost:3000');
});
