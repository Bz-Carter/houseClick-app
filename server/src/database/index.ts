import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const user = "root_house_click";
const userPassword = "IkaD64kJCph91R16";
const cluster = "cluster0.fmixu";

const url =
  `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  const db = client.db("main");

  return {
    listings: db.collection("test_listings"),
  };
};
