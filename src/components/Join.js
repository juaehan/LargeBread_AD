import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const JoinContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 998;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0, .8);
    .content{
        position: fixed;
        left: 50%;
        top: 50%;
        z-index: 999;
        background:#fff;
        transform: translate(-50%, -50%);
        width: 500px;
        padding: 0px 20px 40px 20px;
        &>a{
            display: inline-block;
            width: 20px;
            height: 25px;
            text-decoration: none;
            margin-bottom: 40px;
            float: right;
            font-size: 13px;
            line-height: 25px;
            text-align: center;
            margin-top: 5px;
        }
        &>form{
            display: block;
            clear: both;
            &>div{
                width: 75%;
                height: 45px;
                line-height: 45px;
                border: 1px solid #bdbdbd;
                display: inline-block;
                margin-bottom: 15px;
                &>input {
                    width: 75%;
                    border: none;
                }
            }
            &>button{
                margin-left: 5px;
                width: 107px;
                height: 30px;
                border: none;
                background: #fec24a;
                cursor: pointer;
            }
            .join{
                display:block;
                margin: 0 auto;
                width: 200px;
                height: 45px;
                cursor: pointer;
                margin-top: 20px;
            }
        }
    }
`;
const Join = memo(({click, setClick}) => {
    const close = React.useCallback(e => {
        setClick(!click);
    }, [setClick]);
    return (
        <>
                <JoinContainer>
                    <div className="content">
                        <NavLink to="/" className="close" onClick={close}>X</NavLink>
                        <form method='post' action="">
                            <div>
                                <input type="text" id="user_id" name="user_id" placeholder="아이디를 입력해주세요."/>
                            </div>
                            <button type="submit">중복확인</button>
                            <div>
                                <input type="text" id="user_pwd" name="user_pwd" placeholder="비밀번호를 입력해주세요."/>
                            </div>
                            <div>
                                <input type="email" id="user_email" name="user_email" placeholder="example@example.com"/>
                            </div>
                            <button type="submit" className='join'>회원가입</button>
                        </form>
                    </div>
                </JoinContainer>
        </>
    );
});

export default Join;