import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import regexHelper from '../libs/RegexHelper';
import { postJoin } from '../slices/AdminSlice';

const JoinContainer = styled.div`
    .content{
        position: fixed;
        left: 50%;
        top: 50%;
        background:#fff;
        transform: translate(-50%, -50%);
        width: 500px;
        padding: 40px 20px;
        border: 1px solid #bdbdbd;
        &>p{
            font-size: 25px;
            font-weight: bold;
            text-align: center;
            color: #ae2a2f;
            margin-bottom: 50px;
            &>span{
                color: #fec24a;
            }
        }
        &>form{
            display: block;
            clear: both;
            &>div{
                width: 100%;
                height: 45px;
                line-height: 45px;
                border: 1px solid #bdbdbd;
                display: inline-block;
                margin-bottom: 15px;
                &>input {
                    width: 90%;
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
const SignUp = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {error} = useSelector((state) => state.AdminSlice);
    const onSubmit = React.useCallback(e => {
        e.preventDefault();

        const current = e.target;

        try {
            regexHelper.value(current.name, '이름을 입력해주세요.');
            regexHelper.kor(current.name, '이름은 한글만 입력 가능합니다.');

            regexHelper.value(current.user_pw, '비밀번호를 입력해주세요.');
            regexHelper.value(current.confirmPw, '비밀번호를 입력해주세요.');
            regexHelper.engNum(current.user_pw, '문자와 숫자만 입력 가능합니다.');
            regexHelper.maxLength(current.user_pw, 15, '최대 15글자만 입력 가능합니다.');
            regexHelper.minLength(current.user_pw, 6, '최소 6글자 이상 입력해주세요.');

            regexHelper.value(current.user_email, '이메일을 입력해주세요.');
        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }
        if(current.user_pw.value !== current.confirmPw.value){
            window.alert("비밀번호가 일치하지 않습니다.");
        } else {
            dispatch(postJoin({
                name: current.name.value,
                user_pw: current.user_pw.value,
                user_email: current.user_email.value,
                confirmPw: current.confirmPw.value,
            }))
            window.alert("회원가입이 완료되었습니다.");
            navigate("/");
        }
    }, [dispatch, navigate]);
    return (
        <JoinContainer>
            {error ? (
                <p>error</p>
            ) : (
                <div className="content">
                    <p>Large<span>Bread</span></p>
                    <form onSubmit={onSubmit}>
                        <div>
                            <input type="text" id="name" name="name" placeholder="이름을 입력해주세요."/>
                        </div>
                        <div>
                            <input type="email" id="user_email" name="user_email" placeholder="사용할 이메일을 입력해주세요."/>
                        </div>
                        <div>
                            <input type="password" id="user_pw" name="user_pw" placeholder="비밀번호를 입력해주세요.(문자+숫자 조합)" autoComplete="off"/>
                        </div>
                        <div>
                            <input type="password" id="confirmPw" name="confirmPw" placeholder="비밀번호를 다시 한번 입력해주세요." autoComplete="off"/>
                        </div>
                        
                        <button type="submit" className='join'>회원가입</button>
                    </form>
                </div>
            )}
        </JoinContainer>
    );
});

export default SignUp;