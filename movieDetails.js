function getMovieDetails(movieTitle, getMovieMessage) {
  const movie = {
    title: movieTitle
  };

  if (movieTitle === "The Forge") {
    movie.runtime = 120;
    movie.releaseDate = "2025-01-01";
    movie.showtime = "7:00 PM";
    movie.description = "A young man learns life lessons from a mentor.";

    return getMovieMessage(movie);
  }
}

const movieMessage = getMovieDetails("The Forge", (movie) => {
  return `${movie.title} is ${movie.runtime} long and starts at ${movie.showtime}. Description: ${movie.description}`;
});

console.log(movieMessage);
