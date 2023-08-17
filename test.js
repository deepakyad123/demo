const { MongoClient } = require("mongodb");

// Replace the URL and collection name with your actual values
const url = "mongodb://localhost:27017";
const dbName = "collage";
const collectionName = "students";

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    console.log("Database is connected");

    return db;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}

async function fetchDataFromCollection() {

    // let db;
  try {
    const db = await connectToDatabase();
    //console.log("hi");
    const collection = db.collection(collectionName);
    // Find all documents in the collection
    const data = await collection.find({}).toArray();

    console.log("Data from the collection:");
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
//    finally {
//     if (db) {
//         try {
//           await db.close();
//         } catch (err) {
//           console.error("Error closing the database connection:", err);
//         }
//       }
//   }
}

// Call the function to fetch data from the collection
fetchDataFromCollection();
