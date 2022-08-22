import {configureStore} from '@reduxjs/toolkit';
import AdminSlice from './slices/AdminSlice';

const store = configureStore({
    reducer: {
        AdminSlice: AdminSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;