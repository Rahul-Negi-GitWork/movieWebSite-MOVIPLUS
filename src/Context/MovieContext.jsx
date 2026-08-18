import { createContext, useEffect, useState, useContext } from 'react'
import Favorites from '../Pages/Favorites'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieID) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieID))
    }

    const isFavorite = (movieID) => {
        return favorites.some(movie => movie.id === movieID)
    }

    const vlaue = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={vlaue}>
        {children}
    </MovieContext.Provider>
}