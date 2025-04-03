import express, { Express, Request, Response } from "express";
import evaluadosRouter from './src/routes';

const app: Express = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev'));
app.use(express.json()); 
app.use(evaluadosRouter);

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});
