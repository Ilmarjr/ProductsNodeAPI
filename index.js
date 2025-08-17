const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const productRoute = require("./routes/product.route.js");
const errorHandler = require('./utils/erroHandler.js'); 

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello World! From Node API');
});

// Error handling middleware
app.use(errorHandler);


// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://:@backenddb.xbtiowe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });