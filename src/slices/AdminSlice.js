import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { pending, fulfilled, rejected } from '../Util';
import {cloneDeep} from 'lodash';

const API_URL = 'http://localhost:3001/';

export const postJoin = createAsyncThunk("AdminSlice/postJoin", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.post(`${API_URL}signup`,{
            name: payload.name,
            user_pw: payload.user_pw,
            user_email: payload.user_email,
            confirmPw: payload.confirmPw,
        });
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

export const getLogin = createAsyncThunk("AdminSlice/getLogin", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get(`${API_URL}`,{
            user_pw: payload.user_pw,
            user_email: payload.user_email
        });
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

export const postLogin = createAsyncThunk("AdminSlice/postLogin", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.post(`${API_URL}`,{
            user_pw: payload.user_pw,
            user_email: payload.user_id
        });
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const AdminSlice = createSlice({
    name: 'AdminSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [postJoin.pending] : pending,
        [postJoin.fulfilled] : fulfilled,
        [postJoin.rejected] : rejected,

        [postLogin.pending] : pending,
        [postLogin.fulfilled] : fulfilled,
        [postLogin.rejected] : rejected
    }
});

export default AdminSlice.reducer;