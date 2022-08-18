import React, { memo } from 'react';
import styled from 'styled-components';

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
        padding: 20px;
    }
`;
const Join = memo(() => {
    return (
        <JoinContainer>
            <div className="content">
                <form method='post' action="">
                    <div>
                        <label htmlFor='user_id'>아이디</label>
                        <input type="text" id="user_id" name="user_id" placeholder="아이디를 입력해주세요."/>
                        <span>중복된 아이디입니다.</span>
                    </div>
                    <div>
                        <label htmlFor='user_pwd'>비밀번호</label>
                        <input type="text" id="user_pwd" name="user_pwd" placeholder="비밀번호를 입력해주세요."/>
                    </div>
                    <div>
                        <label htmlFor='user_email'>이메일</label>
                        <input type="email" id="user_email" name="user_email" placeholder="example@example.com"/>
                    </div>
                </form>
            </div>
        </JoinContainer>
    );
});

export default Join;