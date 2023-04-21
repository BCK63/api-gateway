import express, { Application } from 'express';
import amqp from 'amqplib';
import indexRouter from './routes';
const app: Application = express();

async function createConnection() {

  const connection = await amqp.connect('amqp://localhost:5673');
  const channel = await connection.createChannel();
  
}

app.use('/', indexRouter);



export default app