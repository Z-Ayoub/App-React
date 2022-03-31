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

    // Actions
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }

    return (
        <GlobalContext.Provider 
        value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
};