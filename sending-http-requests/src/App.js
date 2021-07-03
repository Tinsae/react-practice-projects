import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // getting from my firebase real time database
      const response = await fetch("https://react-http-f83c6-default-rtdb.firebaseio.com/movies.json");
      // const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const moviesData = await response.json();
      let loadedMovies = [];
      for (const key in moviesData) {
        loadedMovies.push({ ...moviesData[key], id: key })
      }
      if (moviesData) {
        setMovies(loadedMovies);
        // const transformedMovies = moviesData.results.map(currMovie => {
        //   return {
        //     id: currMovie.episode_id,
        //     title: currMovie.title,
        //     releaseDate: currMovie.release_date,
        //     openingText: currMovie.opening_crawl
        //   }
        // });
      }
    }
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function addMovieHandler(movie) {
    // sending to my realtime firebase database
    const response = await fetch('https://react-http-f83c6-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // returns the newly created data
    const data = await response.json();
    console.log(data);
    fetchMoviesHandler();
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment >
  );
}

export default App;
