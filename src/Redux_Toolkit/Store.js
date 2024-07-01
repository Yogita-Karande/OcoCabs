import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginSlice from "./Slices/loginSlice";

const persistConfig = {
    key: 'root',
    storage: storage,
  };
  
  const persistedReducer = persistReducer(persistConfig,loginSlice );
 
  export const store = configureStore({
       reducer:{
          token : persistedReducer
       }
      }
  )
  
  export const persistor = persistStore(store);
  
  