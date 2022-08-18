import React, { memo } from 'react';
import styled from 'styled-components';
import IdPwd from '../components/IdPwd';
import bg from '../assets/img/bread_background.jpg';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background:url(${bg}) no-repeat center;
    .box{
        width: 340px;
        background: #fff;
        padding: 20px;
        &>p{
            font-size: 25px;
            font-weight: bold;
            text-align: center;
            color: #ae2a2f;
            margin-bottom: 30px;
            &>span{
                color: #fec24a;
            }
        }
    }
`;
const Login = memo(() => {
    return (
        <LoginContainer>
            <div className="box">
                <p>Large<span>Bread</span></p>
                <IdPwd />
            </div>
        </LoginContainer>
    );
});

export default Login;