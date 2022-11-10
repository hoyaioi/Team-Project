import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../CSS/MyInfoUp1.css';

function MyInfoUp1({ memIdx, handleIsNow, history }) {

    const [data, setData] = useState({});
    const [memPw1, setMemPw1] = useState('');

    const inputPw = useRef();

    const handlerChangePw1 = (e) => setMemPw1(e.target.value);

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

    const handlerOnClick = (e) => {

        axios.post(`http://localhost:8080/member/${memIdx}`, `memPw1=${memPw1}`)
            .then(response => {
                if(response.status === 200){
                    handleIsNow(e);
                }
            })
            .catch(error => {
                console.log(error);
                alert('비밀번호가 일치하지 않습니다.');
                inputPw.current.focus();
                setMemPw1('');
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
                            <input type='password' ref={inputPw} value={memPw1} placeholder='비밀번호를 입력해주세요.' onChange={handlerChangePw1} autoComplete='off' />
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