import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Server running with TypeScript");
});
import { PORT } from "./config";
// const PORT = 3000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server d running on http://localhost:${PORT}`);
});