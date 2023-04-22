import express, { Application } from 'express';
import indexRouter from './routes';
import { createConnection } from './config/channel';
const app: Application = express();
async function startServer() {
  try {
    await createConnection()
    app.use('/', indexRouter);
  app.listen(3000, ()=> {
    console.log('listening on port 3000');
  }).on('error', error=>{
    console.log(error)
  })
  } catch (error) {
    console.log(error);
  }

}
startServer();



export default app