import { configureStore } from '@reduxjs/toolkit';
import mainPageSlice from '../sections/mainPage/mainPageSlice';
import main from './mainSlice';



const store = configureStore({
    reducer: { 
        mainPageSlice, main
      
    },
devTools: process.env.NODE_ENV !== 'production',
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(api.middleware),
  
  });
  
  export default store;