import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggleSlice/toggleSlice'
// import { slideApi } from '../features/SlideApi/SlideApi';
// import { categoryApi } from '../features/categorySlice/categorySlice';
// import cartSlice from '../features/CartSlice/CartSlice'
// import AuthReducer from '../features/AuthSlice/AuthSlice';

export const store = configureStore({
  reducer: {
    toggleReducer,
    // [slideApi.reducerPath]: slideApi.reducer,
    // [categoryApi.reducerPath]: categoryApi.reducer,
    // cartItem: cartSlice,
    // Auth: AuthReducer,
  },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(slideApi.middleware, categoryApi.middleware),
});
