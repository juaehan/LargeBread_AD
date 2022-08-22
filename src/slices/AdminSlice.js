import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {cloneDeep} from 'lodash';

const API_URL = 'http://localhost:3001/';

export const postJoin = createAsyncThunk("AdminSlice/postJoin", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.post(`${API_URL}join`,{
            user_id: payload.user_id,
            user_pwd: payload.user_pwd,
            user_email: payload.user_email,
        });
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

export const findID = createAsyncThunk("AdminSlice/findID", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get(`${API_URL}${payload?.user_id}`);
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
        [postJoin.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [postJoin.fulfilled] : (state, {meta, payload}) => {
            const data = cloneDeep(state.data);

            data.item.unshift(payload.data.item);
            data.item.pop();

            return {
                data: payload?.data,
                loading:false,
                error:null
            }
        },
        [postJoin.rejected] : (state, {payload}) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload?.data?.rt ? payload.data?.rt : (payload?.status ? payload.status : 500),
                    message: payload?.data?.rtmsg ? payload.data?.rtmsg : (payload?.statusText ? payload.statusText : 'Server Error')
                }
            }
        },

        [findID.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [findID.fulfilled] : (state, {meta, payload}) => {
            return {
                data: payload?.data,
                loading:false,
                error:null
            }
        },
        [findID.rejected] : (state, {payload}) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload?.data?.rt ? payload.data?.rt : (payload?.status ? payload.status : 500),
                    message: payload?.data?.rtmsg ? payload.data?.rtmsg : (payload?.statusText ? payload.statusText : 'Server Error')
                }
            }
        }
    }
});

export default AdminSlice.reducer;