import {configureStore} from '@reduxjs/toolkit';
import AdminProductSlice from './slices/AdminProductSlice';
import AdminSlice from './slices/AdminSlice';

const store = configureStore({
    reducer: {
        AdminSlice: AdminSlice,
        AdminProductSlice: AdminProductSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;