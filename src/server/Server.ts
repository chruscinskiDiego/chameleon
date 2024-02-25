import express from 'express';
import {router} from './routes';

const server = express();

server.use(router); // <= Uso das rotas inseridas no arquivo "src/server/routes/index.ts"

export { server };