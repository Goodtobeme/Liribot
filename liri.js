 // Include the request npm package (
 var request = require("request");

  var nodeArgs = process.argv;

  //  Variable for holding the movie name
  var movieName = "";

  // Loop through in the node argument
  for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

  movieName = movieName + "+" + nodeArgs[i];

  }

  else {

   movieName += nodeArgs[i];

  }
}

  // Run a request to the OMDB API with the movie 
   var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

   console.log(queryUrl);

   request(queryUrl, function(error, response, body) {

   // If successful
   if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover all info

    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).RottenTomatoesRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
  
});
