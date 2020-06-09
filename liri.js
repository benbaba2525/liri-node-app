require("dotenv").config();


var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require('moment'); // require

var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
case "concert-this":
  getBandsEvents(value);
  break;

case "spotify-this-song":
  getSong(value);
  break;

case "movie-this":
  getMovie(value);
  break;

case "do-what-it-says":
  doWhatItSays();
  break;
}


// This will search the Bands in Town Artist Events
function getBandsEvents(artists){
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
function getSong(userSearch){

  if (userSearch === undefined) {
    userSearch = `"The Sign" Ace of Base`
}

spotify
  .search({ type: 'track', query: userSearch  })
  .then(function(data) {
      var result = data.tracks.items[0]
    console.log("Artist(s) : " , result.album.artists[0].name);
    console.log("Song Name : " , result.name);
    console.log("Preview : " , result.preview_url);
    console.log("Album Name : " , result.album.name);

  })
  .catch(function(err) {
    console.log("Error occurred : " + err);
  });


};

// This will output movie information
function getMovie(movieName){

    // Run a request with axios to the OMDB API with the movie specified
axios.get(`https://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`).then(

    function(response) {
      console.log("Title of the movie : " + response.data.Title);
      console.log("Year the movie came out : " + response.data.Year);
      console.log("IMDB Rating of the movie : " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating of the movie : " + response.data.Ratings[1].Value);
      console.log("Country where the movie was produced : " + response.data.Country);
      console.log("Language of the movie : " + response.data.Language);
      console.log("Plot of the movie : " + response.data.Plot);
      console.log("Actor in the movie : " + response.data.Actors);
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


//Response if user does not type in a movie title
if (movieName === " ") {
  console.log("-----------------------");
  console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
  console.log("It's on Netflix!");
};


};



// Will run sptify-this-song for "I Want It That Way" as follows the text in random.txt
function doWhatItSays(){

};