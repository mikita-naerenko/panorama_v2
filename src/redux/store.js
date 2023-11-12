import { configureStore } from '@reduxjs/toolkit';
import mainPage from '../sections/mainPage/mainPageSlice';
import main from './mainSlice';
import portfolioFilter from '../sections/portfolioFilter/portfolioFilterSlice'





const store = configureStore({
    reducer: { 
        mainPage,
        main,
        portfolioFilter,
        
      
    },
devTools: process.env.NODE_ENV !== 'production',
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(api.middleware),
  
  });
  
  export default store;