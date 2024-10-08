import React from 'react';
import { useFavorites } from '/src/components/common/useFavorites';

const FavoritesComponent = () => {
  const { favorites, addFavorite, removeFavorite, clearFavorites } = useFavorites();

  const exampleMovie = {
    src: 'example.jpg',
    title: 'Example Movie',
    year: 2022,
    episodes: 1,
    description: 'This is an example movie.',
    cast: 'John Doe',
    genre: 'Drama',
  };

  return (
    <div>
      <h1>My Favorites</h1>
      <button onClick={() => addFavorite(exampleMovie)}>Add Favorite</button>
      <button onClick={clearFavorites}>Clear Favorites</button>
      
      <ul>
        {favorites.map((movie) => (
          <li key={movie.title}>
            {movie.title} <button onClick={() => removeFavorite(movie.title)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesComponent;
