import React from 'react';
import {createContext, useReducer, useEffect} from 'react';

//Initialiser State

const initialState = {
    watchlist: [],
    watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer,initialState);
}