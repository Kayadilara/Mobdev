const { MongoClient } = require("mongodb");

const url = "mongodb+srv://Root:kQc8bEM5AIIRmYFF@mobdev.ixodp.mongodb.net/Mobdev?retryWrites=true&w=majority"
const client = new MongoClient(url);

const dbName = "Mobdev";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("Animals");
         const colSpecies = db.collection("Species");

         let catFilter = {
            "species": "Cat"
         }

         const speciesCat = await colSpecies.findOne(catFilter);
         console.log(speciesCat);

         const speciesId = speciesCat._id;
         console.log(speciesId);

        let animalsDocument = {
            "name": "Lily",
            "birth": new Date(2014, 9, 8),
            "species": speciesId                                                                                                                                                                                                                                                      
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(animalsDocument);
        // Find one document
        const myDoc = await col.find();
        // Print to the console
        console.log(myDoc);


       } catch (err) {
        console.log(err.stack);
    }

    finally {
       await client.close();
   }
}

run().catch(console.dir);