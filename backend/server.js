const dotenv = require('dotenv');
const axios = require('axios');
const app = require('express')();
const cors = require('cors');
const testRoutes = require('./routes/test-routes');
const pexelsRoutes = require('./routes/pexels-routes');

// setup dotenv environment variables found within .env file
dotenv.config();

// setup cors for all routes
app.use(cors());

// Configure GET Express routes
app.get('/search?', (req,res) => {
    pexelsRoutes.requestPexelsImages(req,res);
})

// Configure GET Express routes
app.get('/:id', (req,res) => {
    console.log('We have received your request.');
    testRoutes.greetingResponse(req,res);
})

// Configure POST Express routes
app.post('/', (req,res) => {
    res.send("POST method received.");
})

// Set http listening port 
const port = process.env.PORT || 3001;

// Launch server and listen for http requests
app.listen(port, () => {
  console.log(`Express server started. Listening on port ${port}`);
});



