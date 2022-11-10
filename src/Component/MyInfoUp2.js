import axios from 'axios';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/MyInfoUp2.css';

function MyInfoUp2({ memIdx }) {

    const [data, setData] = useState({ });
    // const [memIdx, setMemIdx] = useState('');
    const [memName, setMemName] = useState('');
    const [memPhone, setMemPhone] = useState('');
    const [memPostNum, setMemPostNum] = useState('');
    const [memAdr1, setMemAdr1] = useState('');
    const [memAdr2, setMemAdr2] = useState('');
    const [memEmail, setMemEmail] = useState('');
    const [memPw1, setMemPw1] = useState('');
    const [memPw2, setMemPw2] = useState('');

    const handlerChangeName = (e) => setMemName(e.target.value);
    const handlerChangePhone = (e) => setMemPhone(e.target.value.replace(/[^0-9]/g, "")); //숫자만 입력받기 replace를 이용한 필터링
    const handlerChangePostNum = (e) => setMemPostNum(e.target.value);
    const handlerChangeAdr1 = (e) => setMemAdr1(e.target.value);
    const handlerChangeAdr2 = (e) => setMemAdr2(e.target.value);
    const handlerChangeEmail = (e) => setMemEmail(e.target.value);
    const handlerChangePw1 = (e) => setMemPw1(e.target.value);
    const handlerChangePw2 = (e) => setMemPw2(e.target.value);

    const inputPw = useRef();
    const inputPhone = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/member/${memIdx}`)
            .then(response => {
                setData(response.data);
                setMemName(response.data.memName);
                setMemPhone(response.data.memPhone);
                setMemPostNum(response.data.memPostNum);
                setMemAdr1(response.data.memAdr1);
                setMemAdr2(response.data.memAdr2);
                setMemEmail(response.data.memEmail);
                inputPw.current.focus();
            })
            .catch(error => console.log(error));
    }, []);
    
    const handlerClickUpdate = () => {

        if(memPw1 !== memPw2){
            alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
            setMemPw1('');
            setMemPw2('');
            inputPw.current.focus();
        } else if(memPw1 == '' || memPw2 == '') {
            alert('변경하실 비밀번호를 입력해주세요.');
            setMemPw1('');
            setMemPw2('');
            inputPw.current.focus();
        } else if(memPhone.length < 10){
            alert('휴대폰번호를 올바르게 입력해주세요.');
            setMemPhone('');
            inputPhone.current.focus();
        } else {
        axios.put(`http://localhost:8080/member/${memIdx}`,
            {   
                'memIdx': memIdx,
                'memName': memName,
                'memPhone': memPhone,
                'memPostNum': memPostNum,
                'memAdr1': memAdr1,
                'memAdr2': memAdr2,
                'memEmail': memEmail,
                'memPw1': memPw1,
                'memPw2': memPw2
            })
            .then(response => {
                if (response.status === 200) {
                    alert("회원정보가 변경되었습니다.");
                    navigate('/');
                } else {
                    alert("회원정보 수정이 실패하였습니다.");
                    return;
                }
            })
            .catch(error => console.log(error));
        };
    };

    const handlerClickCancel = () => {
        if(window.confirm('정보 변경을 취소하시겠습니까?'))
        navigate('/');
    }


    return (
        <>
            <div id='main'>
                <div className='myinfoup2_wrap'>
                    <div className='myinfoup2_title_wrap'>
                        <h2>회원정보수정</h2>
                    </div>
                    <form>
                        <div className='myinfoup2_form_wrap'>
                            <div className='myinfoup2_info_wrap'>
                                <div className='myinfoup2_name_wrap'>
                                    <div className='myinfoup2_text'>이름 <label className='myinfoup2_help'>{'(이름 변경이 필요할 경우 고객센터로 문의 바랍니다.)'}</label></div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' className='myinfoup2_readonly' readOnly value={memName} onChange={handlerChangeName} />
                                    </div>
                                </div>
                                <div className='myinfoup2_phone_wrap'>
                                    <div className='myinfoup2_text'>휴대폰번호</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' placeholder="연락처('-'제외)를 입력해주세요." maxLength='11' ref={inputPhone} value={memPhone} onChange={handlerChangePhone} />
                                    </div>
                                </div>
                                <div className='myinfoup2_adr_wrap'>
                                    <div className='myinfoup2_text'>주소</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' className='myinfoup2_post' value={memPostNum} onChange={handlerChangePostNum} readOnly placeholder='우편번호' />
                                        <input type='button' className='myinfoup2_search' value='검색' />
                                    </div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' className='myinfoup2_readonly' value={memAdr1} onChange={handlerChangeAdr1} readOnly />
                                    </div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' placeholder="상세 주소를 입력해주세요." value={memAdr2} onChange={handlerChangeAdr2} />
                                    </div>
                                </div>
                            </div>
                            <div className='myinfoup2_id_wrap'>
                                <div className='myinfoup2_email_wrap'>
                                    <div className='myinfoup2_text'>이메일 (ID)</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='email' className='myinfoup2_readonly' value={memEmail} onChange={handlerChangeEmail} readOnly />
                                    </div>
                                </div>
                                <div className='myinfoup2_pw_wrap'>
                                    <div className='myinfoup2_text'>비밀번호</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='password' placeholder="비밀번호를 입력해주세요." ref={inputPw} value={memPw1} onChange={handlerChangePw1} />
                                    </div>
                                </div>
                                <div className='myinfoup2_pw_wrap'>
                                    <div className='myinfoup2_text'>비밀번호 확인</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='password' placeholder="비밀번호를 다시 입력해주세요." value={memPw2} onChange={handlerChangePw2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='myinfoup2_btn_wrap'>
                            <input type='button' className='myinfoup2_btn_cancle' value='취소' onClick={handlerClickCancel} />
                            <input type='button' className='myinfoup2_btn_modify' onClick={handlerClickUpdate} value='수정하기' />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default MyInfoUp2;