 import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SliseTwo from "./slices/SliceTwo";
import SliseOne from "./slices/SlieceOne";


const rootReducer = combineReducers({
    sliceOne:SliseOne,
    sliceTwo:SliseTwo
  });
export  const  Store =configureStore( 
    {

        reducer:rootReducer
            
        
    }
    ) 