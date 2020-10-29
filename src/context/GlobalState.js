import React , { createContext, useReducer, useEffect } from 'react';


//initial state  ==> you can call make value or initial Value
const initialState = {
    watchList: [],
    watched: [],
}


//create context 
export const GlobalContext = createContext(InitialState);



//Provide to our components
export const GlobalProvider = props => {
    const [ state, dispatch ] = useReducer(AppReducer,initialState);
}