const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ibrahimalmekhlafimy_db_user:lXX20CnGYAaTdT2J@ibr4nx.sjth1pb.mongodb.net/?appName=ibr4nx";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true, // Enable TLS
  tlsInsecure: false, // Set to true if you want to ignore certificate errors (not recommended for production)
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    console.log("start connect");
    await client.connect();
    // Send a ping to confirm a successful connection
    console.log("end connect");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
