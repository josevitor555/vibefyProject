import { MongoClient } from "mongodb";

const URL = "mongodb+srv://jv1054596:Zv1bAqDiWv7NqDka@vibefy.doobg.mongodb.net/?retryWrites=true&w=majority&appName=VibeFy";
const client = new MongoClient(URL);

export const db = client.db("VibeFy");
// const artistsCollection = await db.collection("artists").find({}).toArray();
// console.log(artistsCollection);