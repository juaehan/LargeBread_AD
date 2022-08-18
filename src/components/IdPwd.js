import React, { memo } from 'react';
import styled from 'styled-components';
import Join from '../components/Join';

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
    &>p{
        font-size: 13px;
        color: #4a4a4a;
        cursor: pointer;
        margin: 20px 0;
        &:hover{
            text-decoration: underline;
        }
    }
`;
const IdPwd = memo(() => {
    const [click, setClick] = React.useState(false);
    const onJoin = React.useCallback(e => {
        setClick(!click);
    }, [click]);
    return (
        <>
        <LoginContents method="post" action="">
            <div>
                <input type="text" placeholder="아이디" name="user_id" />
            </div>
            <div>
                <input type="password" id="user_pw" placeholder="비밀번호" />
            </div>
            <button type="submit">로그인</button>
            <p onClick={onJoin}>관리자등록</p>
        </LoginContents>
        {click && <Join />}
        </>
    );
});

export default IdPwd;