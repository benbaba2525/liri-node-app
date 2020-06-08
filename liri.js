require("dotenv").config();


var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require('moment'); // require
var spotify = new Spotify(keys.spotify);


// This will search the Bands in Town Artist Events
function getBandsEvents(){
    // Then run a request with axios to the OMDB API with the movie specified
axios.get(`https://rest.bandsintown.com/artists/${artists}/events?app_id=codingbootcamp`).then(
    function(response) {
      console.log("Name of the venue : " + response.data[0].venue.name);
      console.log("Venue location : " + response.data[0].venue.location);

      var eventDate = moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a');
      console.log("Date of the Event  : " + eventDate);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  


};


// This will show information about the song 
function getSong(){

    
};

// This will output movie information
function getMovie(){

};


// Will run sptify-this-song for "I Want It That Way" as follows the text in random.txt
function doWhatItSays(){

};