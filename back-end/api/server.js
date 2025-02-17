import express from "express";

//Import a Middleware function
import cors from "cors";

// Import Database
import { db } from "./connect.js";

// app.use(express.json());

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/", (req, resp) => {
    resp.send("Olá, mundo!");
});

// Rota para o endpoint "/artists"
app.get("/artists", async (req, resp) => {
    resp.send(await db.collection("artists").find({}).toArray());
});

// Rota para o endpoint "/songs"
app.get("/songs", async (req, resp) => {
    resp.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port.`);
});