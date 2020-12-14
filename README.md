# Liri Bot

# Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## What Each Command Does

#### * `1. node liri.js concert-this <artist/band name here>` 

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

![alt-concert-this](https://github.com/benbaba2525/liri-node-app/blob/master/demoGif/2020-06-11%2020.41.46.gif)

##

#### * `2. node liri.js spotify-this-song '<song name here>'`

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
- If no song is provided then the program will default to "The Sign" by Ace of Base.

![alt-spotify-this-song](https://github.com/benbaba2525/liri-node-app/blob/master/demoGif/spotify.gif)



##

#### *`3. node liri.js movie-this '<movie name here>'`

This will output the following information to your terminal/bash window:
  - Title of the movie.
  - Year the movie came out.
  - IMDB Rating of the movie.
  - Rotten Tomatoes Rating of the movie.
  - Country where the movie was produced.
  - Language of the movie.
  - Plot of the movie.
  - Actors in the movie.
  
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/.
It's on Netflix!



![alt-movie-this](https://github.com/benbaba2525/liri-node-app/blob/master/demoGif/movie.gif)

##

#### * `4. node liri.js do-what-it-says`

Run spotify-this-song for "I Want it That Way"
<br><br>

![alt-movie-this](https://github.com/benbaba2525/liri-node-app/blob/master/demoGif/dowhatitsay.gif)


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
  <br><a target="_blank" rel="nofollow" href="https://www.kanyarut.me/">Visit My Portfolio</a>


## Acknowledgments
  - UCLA Coding Bootcamp   <a target="_blank" rel="nofollow" href="https://bootcamp.uclaextension.edu/coding/">Visit UCLA Coding Bootcamp</a>

## Helpful Link

  - <a target="_blank" rel="nofollow" href="https://en.wikipedia.org/wiki/Node.js">Wikipedia: Node.js</a>
  - <a target="_blank" rel="nofollow" href="https://nodejs.dev/learn">Learn Node.js</a>
  - <a target="_blank" rel="nofollow" href="https://nodejs.org/api/documentation.html">Node.js Documentation</a>
  - <a target="_blank" rel="nofollow" href="https://node.readthedocs.io/en/latest/api/fs/">File System (fs)</a>
  - <a target="_blank" rel="nofollow" href="https://momentjs.com/docs/">Moment.js Documentation</a>
  - <a target="_blank" rel="nofollow" href="https://www.npmjs.com/package/inquirer/v/0.2.3">InquirerJS</a>



















