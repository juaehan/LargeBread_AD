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
const Join = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.AdminSlice);

    const onSubmit = React.useCallback(e => {
        e.preventDefault();

        const current = e.target;

        try {
            regexHelper.value(current.user_id, '아이디를 입력해주세요.');
            regexHelper.engNum(current.user_id, '영문과 숫자만 입력 가능합니다.');
            regexHelper.minLength(current.user_id, 6, '최소 6글자 이상 입력해주세요.');
            regexHelper.maxLength(current.user_id, 15, '최대 15글자만 입력 가능합니다.');

            regexHelper.value(current.user_pwd, '비밀번호를 입력해주세요.');
            regexHelper.engNum(current.user_pwd, '문자와 숫자만 입력 가능합니다.');
            regexHelper.maxLength(current.user_pwd, 15, '최대 15글자만 입력 가능합니다.');
            regexHelper.minLength(current.user_pwd, 6, '최소 6글자 이상 입력해주세요.');

            regexHelper.value(current.user_email, '이메일을 입력해주세요.');
        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        dispatch(postJoin({
            user_id: current.user_id.value,
            user_pwd: current.user_pwd.value,
            user_email: current.user_email.value,
        }))
        window.alert("회원가입이 완료되었습니다.");
        navigate("/");
    }, [dispatch, navigate]);
    return (
        <JoinContainer>
            loading...
            {error ? (
                <p>error</p>
            ) : (
                <div className="content">
                    <p>Large<span>Bread</span></p>
                    <form onSubmit={onSubmit}>
                        <div>
                            <input type="text" id="user_id" name="user_id" placeholder="아이디를 입력해주세요."/>
                        </div>
                        <div>
                            <input type="password" id="user_pwd" name="user_pwd" placeholder="비밀번호를 입력해주세요.(문자+숫자 조합)" autoComplete="off"/>
                        </div>
                        <div>
                            <input type="email" id="user_email" name="user_email" placeholder="example@example.com"/>
                        </div>
                        <button type="submit" className='join'>회원가입</button>
                    </form>
                </div>
            )}
        </JoinContainer>
    );
});

export default Join;