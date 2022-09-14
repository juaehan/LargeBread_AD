import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { pending, fulfilled, rejected } from '../Util';
import {cloneDeep} from 'lodash';

const API_URL = 'http://localhost:3001/';


/** 상품관리 리스트 출력 */
export const getProductList = createAsyncThunk("AdminSlice/getProductList", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get(`${API_URL}admin/product`);
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});


/** 상품추가 */
export const addProduct = createAsyncThunk("AdminSlice/addProduct", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.post(`${API_URL}admin/product/product_add`,{
            product_name: payload.product_name,
            price: payload.price,
            img_url: payload.img_url,
            product_state: payload.product_state,
            cost: payload.cost,
            category_id: payload.category_id,
        },{headers: {"Content-Type" : "multipart/form-data"}});
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});


/** 상품삭제 */
export const deleteProduct = createAsyncThunk("AdminSlice/deleteProduct", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.delete(`${API_URL}admin/product/${payload.id}`);
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});


/** 상품수정 */
export const putProduct = createAsyncThunk("AdminSlice/putProduct", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.put(`${API_URL}admin/product/product_edit/${payload.id}`, {
            product_name: payload.product_name,
            price: payload.price,
            id: payload.id,
            product_state: payload.product_state,
            cost: payload.cost,
            category_id: payload.category_id,
        });
    }catch(err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const AdminProductSlice = createSlice({
    name: 'AdminProductSlice',
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

        [addProduct.pending] : pending,
        [addProduct.fulfilled] : fulfilled,
        [addProduct.rejected] : rejected,

        [putProduct.pending] : pending,
        [putProduct.fulfilled] : (state, {meta, payload}) => {
            const data = cloneDeep(state.data);
            console.log(data);

            const index = data.data.item.findIndex(element => element.id === parseInt(meta.arg.id));
            console.log('index= '+index);

            if(index !== undefined){
                data.data.item.splice(index, 1, payload.data.item);
            }

            return {
                data: data,
                loading: false,
                error: null
            }
        },
        [putProduct.rejected] : rejected,

        [deleteProduct.pending] : pending,
        [deleteProduct.fulfilled] : (state, {meta, payload}) => {
            const data = cloneDeep(state.data);
            const index = data.data.item.findIndex(element => element.id === parseInt(meta.arg.id));

            if(index !== undefined){
                data.data.item.splice(index, 1);
            }

            return {
                data: data,
                loading: false,
                error: null
            }
        },
        [deleteProduct.rejected] : rejected,
    }
});

export default AdminProductSlice.reducer;