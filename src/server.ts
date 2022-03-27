import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import { routes } from './routes';
import './database';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const port = process.env.PORT || 3333;

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {
  console.log(`🔥 Servidor iniciado em http://localhost:${port}`);
});
