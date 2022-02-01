const axios = require('axios');
const qs = require('querystring');

// add cors related key-values to response header to allow cors api request 
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
};

async function requestPexelsImages(req, res) {

    const queryParams = '?' + qs.stringify(req.query);

    // init axios get options
    const axiosOptions = {
        method: 'get',
        url: 'https://api.pexels.com/v1' + req.url,
        headers: {
            Authorization: process.env.PEXELS_API_KEY,
        },

    }

    try {
        console.log(`Fetching data from: ${axiosOptions.url}`);
        const response = await axios(axiosOptions); 
        res.send(response.data);
    }
    catch (error) {
        res.send(`Error occursed attempting to contact PEXELS.\n${error}`);
    }

}


// expose public methods
module.exports.requestPexelsImages = requestPexelsImages; 