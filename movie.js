class Movie {
    constructor(title, genre) {
      this.title = title;
      this.genre = genre;
      this.isAvailable = true;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre) {
      const newMovie = new Movie(title, genre);
      this.movies.push(newMovie);
      console.log(`${newMovie.title} added to the movie store.`);
    }
  
    listMovies() {
      console.log('Available Movies:');
      this.movies.forEach(movie => {
        if (movie.isAvailable) {
          console.log(`${movie.title} - ${movie.genre}`);
        }
      });
    }
  
    rentMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie) {
        if (movie.isAvailable) {
          movie.isAvailable = false;
          console.log(`${movie.title} rented successfully.`);
        } else {
          console.log(`${movie.title} is not available for rent.`);
        }
      } else {
        console.log(`Movie with title "${title}" not found.`);
      }
    }
  }
  
  // Example usage:
  const movieStore = new MovieStore();
  
  movieStore.addMovie('Inception', 'Sci-Fi');
  movieStore.addMovie('The Shawshank Redemption', 'Drama');
  movieStore.addMovie('The Dark Knight', 'Action');
  
  movieStore.listMovies();
  
  movieStore.rentMovie('Inception');
  movieStore.rentMovie('The Dark Knight');
  movieStore.rentMovie('The Matrix');
  
  movieStore.listMovies();
  