import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;

let database;

const getDatabase = async () => {
  const client = MongoClient.connect("mongodb://localhost:27017");
  database = client.db("library");

  if (!database) {
    console.log("Not db connected");
  }
  return database;
};

export default getDatabase;
