import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some(fav => fav.title === movie.title)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites; 
    });
  };

  const removeFavorite = (title) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.title !== title)
    );
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
};
