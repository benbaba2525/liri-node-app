# Liri Bot

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### What Each Command Does

##### node liri.js concert-this <artist/band name here> 


This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")

Important: There is no need to sign up for a Bands in Town api_id key. Use the codingbootcamp as your app_id. For example, the URL used to search for "Celine Dion" would look like the following:

https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp


##### node liri.js spotify-this-song '<song name here>'


This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.
You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:


Step One: Visit https://developer.spotify.com/my-applications/#!/
Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.




##### node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

##### node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.

## Tools/Languages Used:
 - NodeJS
 - JavaScript
 
### APIs:
- <a href="https://developer.spotify.com/">Spotify API</a>
- <a href="http://www.omdbapi.com">OMDB API</a>
- <a href="http://www.artists.bandsintown.com/bandsintown-api">Bands In Town</a>

### NPM Packages:
- <a href="https://www.npmjs.com/package/node-spotify-api">Node-Spotify-API</a>
- <a href="https://www.npmjs.com/package/axios">Axios</a>
- <a href="https://www.npmjs.com/package/moment">Moment</a>
- <a href="https://www.npmjs.com/package/dotenv">DotEnv</a>
  
## Authors
  - Kanyarut Pornamnuay
  <br><a target="_blank" rel="nofollow" href="https://github.com/benbaba2525">Visit My Github Profile</a>
  <br><a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/My-Portfolio/">Visit My Portfolio</a>


## Acknowledgments
  - UCLA Coding Bootcamp   <a target="_blank" rel="nofollow" href="https://bootcamp.uclaextension.edu/coding/">Visit UCLA Coding Bootcamp</a>

## Helpful Link

  - <a target="_blank" rel="nofollow" href="https://en.wikipedia.org/wiki/Node.js">Wikipedia: Node.js</a>
  - <a target="_blank" rel="nofollow" href="https://nodejs.dev/learn">Learn Node.js</a>
  - <a target="_blank" rel="nofollow" href="https://node.readthedocs.io/en/latest/api/fs/">File System (fs)</a>
  - <a target="_blank" rel="nofollow" href="https://momentjs.com/docs/">Moment.js Documentation</a>
  - <a target="_blank" rel="nofollow" href="https://www.npmjs.com/package/inquirer/v/0.2.3">InquirerJS</a>












<br><br>
[![Demo CountPages alpha](https://j.gifs.com/D1OOPn.gif)](https://youtu.be/1Dhq5Uqfthw)





