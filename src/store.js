import {configureStore} from '@reduxjs/toolkit';
import AdminProductSlice from './slices/AdminProductSlice';
import AdminSlice from './slices/AdminSlice';
import OrderListSlice from './slices/OrderListSlice';

const store = configureStore({
    reducer: {
        AdminSlice: AdminSlice,
        AdminProductSlice: AdminProductSlice,
        OrderListSlice: OrderListSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;