import React, { memo } from 'react';
import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../slices/AdminSlice';
import regexHelper from '../libs/RegexHelper';

const LoginContents = styled.form`
    width: 100%;
    &>div{
        width: 100%;
        padding: 10px 0;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        &>input{
            width:95%;
            border: none;
            padding-left: 10px;
        }
        &:first-child{
            border-bottom: none;
        }
    }
    &>button{
        width: 100%;
        height: 50px;
        margin-top: 25px;
        border-radius: 5px;
        border: none;
        background-color: #fec24a;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        color: #fff;
    }
    &>a{
        font-size: 13px;
        color: #4a4a4a;
        cursor: pointer;
        display: inline-block;
        margin: 20px 0;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;
const IdPwd = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {error} = useSelector((state) => state.AdminSlice);
    const onSubmit = React.useCallback(e => {
        e.preventDefault();

        const current = e.target;

        try{
            regexHelper.value(current.user_email, '아이디를 입력해주세요.');
            regexHelper.value(current.user_pw, '비밀번호를 입력해주세요.');
        }catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }
        try{
            dispatch(postLogin({
                user_pw: current.user_pw.value,
                user_email: current.user_email.value
            }))
        }catch (err){
            window.alert('로그인에 실패했습니다. 아이디나 비밀번호를 확인하세요.');
            navigate("/admin");
        } 
    }, [dispatch, navigate]);

    return (
        <>
            <LoginContents onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="아이디" name="user_email" id="user_email"/>
                </div>
                <div>
                    <input type="password" name="user_pw" id="user_pw" placeholder="비밀번호" autoComplete="off" />
                </div>
                <button type="submit">로그인</button>
                <NavLink to="/signup" >관리자등록</NavLink>
            </LoginContents>
        </>
    );
});

export default IdPwd;