import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { pending, fulfilled, rejected } from '../Util';

const API_URL = 'http://localhost:3001/';

export const getOrderList = createAsyncThunk("OrderListSlice/getOrderList", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get(`${API_URL}admin/order_list`);
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const OrderListSlice = createSlice({
    name: 'OrderListSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getOrderList.pending] : pending,
        [getOrderList.fulfilled] : fulfilled,
        [getOrderList.rejected] : rejected,
    }
});

export default OrderListSlice.reducer;