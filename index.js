const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qxh3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB Client setup
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// MongoDB connection and route handling
async function run() {
  try {
    await client.connect();
    const visaCollection = client.db('visaDB').collection('visa');

    const userCollection = client.db('visaDB').collection('users');

    // GET /visa - Fetch the latest 6 visas
    app.get('/visa', async (req, res) => {
      try {
        const cursor = visaCollection.find()
          .sort({ _id: -1 })
          .limit(6);
        const result = await cursor.toArray();
        res.send(result);
      } catch (err) {
        console.error('Error fetching visas:', err);
        res.status(500).send('Error fetching visa data');
      }
    });

    // GET /visa/:id - Fetch a single visa by ID
    app.get('/visa/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const visa = await visaCollection.findOne({ _id: new ObjectId(id) });
        if (!visa) {
          return res.status(404).send({ message: 'Visa not found' });
        }
        res.send(visa);
      } catch (err) {
        console.error('Error fetching visa by ID:', err);
        res.status(500).send('Error fetching visa');
      }
    });

    //get user data fetch by single ID:
    app.get('/users/:email', async (req, res) => {
        const { email } = req.params;
        try {
          const user = await userCollection.findOne({ email });
          if (!user) {
            return res.status(404).send({ message: 'User not found' });
          }
          res.send(user);
        } catch (err) {
          console.error('Error fetching user:', err);
          res.status(500).send('Error fetching user data');
        }
      });

      //application fetch api
      app.get('/applications', async (req, res) => {
        const { email } = req.query; // Example: Filter by email
        try {
          const query = email ? { email } : {}; // Optional email filter
          const applications = await applicationsCollection.find(query).toArray();
      
          res.send(applications);
        } catch (error) {
          console.error('Error fetching applications:', error);
          res.status(500).send({ message: 'Failed to fetch applications.' });
        }
      });
      
      


    // POST /visa - Insert a new visa
    app.post('/visa', async (req, res) => {
      const newVisa = req.body;
      try {
        const result = await visaCollection.insertOne(newVisa);
        res.send(result);
      } catch (err) {
        console.error('Error inserting new visa:', err);
        res.status(500).send('Error inserting visa data');
      }
    });

    //user related api
    app.post('/users', async (req, res) => {
        const newUser = req.body;
        try {
          const result = await userCollection.insertOne(newUser);
          res.send(result);
        } catch (err) {
          console.error('Error inserting new visa:', err);
          res.status(500).send('Error inserting visa data');
        }
      });

      //applications related api
      const applicationsCollection = client.db('visaDB').collection('applications'); // Define applications collection

app.post('/applications', async (req, res) => {
  try {
    const application = req.body;

    // Insert the application into the applications collection
    const result = await applicationsCollection.insertOne(application);

    res.status(201).send(result);
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).send({ message: 'Failed to save application.' });
  }
});

      

    // Ping the MongoDB server
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");

  } catch (error) {
    console.error('Error in MongoDB connection:', error);
  }
}

run();

// Root route for server
app.get('/', (req, res) => {
  res.send('Visa portal is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Visa portal is running on port: ${port}`);
});
