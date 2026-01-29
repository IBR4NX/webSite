import express ,{Request,Response } from "express";
import cors from 'cors';
const {corsUrl,environmet}=require('./config')
const routes = require('./routes/routes');
//  fun tion to start the server (request, response)
import "./database"
const app = express();
app.use(express.json());
app.use(cors({origin:corsUrl,optionsSuccessStatus:200}));
app.use('/', routes);

// catch 404 and forward to error handler
app.use((err:any, req:Request, res:Response, next:any) => {
  // console.error(err);
  res.status(400).json({ status: "Error Status", message: err.message });
  res.end();
});

export default app
