import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { pending, fulfilled, rejected } from '../Util';
import {cloneDeep} from 'lodash';

const API_URL = 'http://localhost:3001/';

export const getProductList = createAsyncThunk("AdminSlice/postJoin", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get(`${API_URL}admin/product`,{
            
        });
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const AdminProductSlice = createSlice({
    name: 'AdminSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getProductList.pending] : pending,
        [getProductList.fulfilled] : fulfilled,
        [getProductList.rejected] : rejected,
    }
});

export default AdminProductSlice.reducer;