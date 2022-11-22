import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/MyInfoUp1.css';

function MyInfoUp1({ memIdx }) {

    const [data, setData] = useState({});
    const [memPw, setMemPw] = useState('');

    const inputPw = useRef();

    const handlerChangePw = (e) => setMemPw(e.target.value);

    useEffect(() => {
        inputPw.current.focus();
    })

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/member/compw/${memIdx}`)
    //         .then(response => {
    //             setData(response.data);
    //             inputPw.current.focus();
    //             console.log(response);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    const navigate = useNavigate();

    const handlerOnClick = () => {

        axios.post(`http://localhost:8080/api/member/comparepw/${sessionStorage.getItem("idx")}`, {"memPw":memPw})
            .then(response => {
                if(response.status === 200){
                    navigate('/mypage/modify');
                }
            })
            .catch(error => {
                console.log(error);
                alert('비밀번호가 일치하지 않습니다.');
                inputPw.current.focus();
                setMemPw('');
            })
                
    }

    return (
        <>
            <div id='main'>
                <div className='myinfoup1_wrap'>
                    <div className='myinfoup1_title_wrap'>
                        <h2>회원정보수정</h2>
                    </div>
                    <div className='myinfoup1_pwcheck_wrap'>
                        <div className='myinfoup1_pwcheck_text'>
                            정보 변경을 위해 현재 비밀번호를 입력해주세요.
                        </div>
                        <div className='myinfoup1_input_wrap'>
                            <input type='password' ref={inputPw} value={memPw} placeholder='비밀번호를 입력해주세요.' onChange={handlerChangePw} autoComplete='off' />
                        </div>
                        <div className='myinfoup1_input_wrap'>
                            <input type='button' id='MyInfoUp2' onClick={handlerOnClick} value='입력완료' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MyInfoUp1;