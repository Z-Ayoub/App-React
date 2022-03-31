import React from 'react';
import {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
//Initialiser State

const initialState = {
    watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
    watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);
    
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watchlist))
    }, [state]);

    // Add Movie to Watch list
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    };

    // Remove Movie FROM WATCH LIST
    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload:id});
    };

    // Add Movie TO WATCHED
    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    };

    // Move Movie TO WATCH LIST
    const moveMovieToWatchlist = (movie) =>{
        dispatch({type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie});
    };

    // Remove Movie FROM WATCHED
    const removeMovieFromWatched = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: id});
    };
    return (
        <GlobalContext.Provider 
        value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveMovieToWatchlist,
            removeMovieFromWatched,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
};