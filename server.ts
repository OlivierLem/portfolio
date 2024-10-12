import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { readFileSync } from "node:fs";

dotenv.config();

const app: Express = express();
const port = 3000;

app.set("views", "./app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

const { project, experience } = JSON.parse(
  readFileSync("app/database/Temp/data.json", "utf-8")
);
app.get("/", (req: Request, res: Response) => {
  res.render(`./pages/homepage`, {
    listProject: project,
    listExperience: experience,
  });
});

app.listen(port, () =>
  console.log(`Serveur Express écoutant sur l'url http://localhost:${port}`)
);
