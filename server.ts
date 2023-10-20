import { port, totalRouteWeigth } from "./utils/params";
import { Request, Response } from "express";

const express = require('express');
const app = express();
let totalRequests = 0;


app.get('/', (_: Request, res: Response) => {
  ++totalRequests;
  console.log(totalRequests);
  return res.status(200).send('Express + TypeScript Server').end();
});

app.get('/heavier', (_: Request, res: Response) => {
    let output: Array<number> = [];
    for ( let  i = 0 , l = totalRouteWeigth ; i < l ; ++i ) {
        output.push(i);
    }
    ++totalRequests;
    console.log(totalRequests);
    return res.status(200).json({ output: output }).end();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});