const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.set('PORT', process.env.PORT | 3001);
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(app.get('PORT'), () => console.log(`Listening in http://localhost:${app.get('PORT')}`));
