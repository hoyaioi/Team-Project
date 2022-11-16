import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AdminAuth.css';

function AdminAuth() {

    const navigate = useNavigate();
    const [adminCheck, setAdminCheck] = useState("");

    useEffect(() => {
    const admin = sessionStorage.getItem('adminCheck')
    if (admin !== '1') {
        alert("관리자만 접근 가능합니다.");
        navigate('/login');
    } 
    },[])
    
    const onChangeAdmin = (e) => setAdminCheck(e.target.value);
    let password = '1234';


    const handlerOnClick = () => {

        if (adminCheck === password) {
          let adminChecked = sessionStorage.setItem("adminChecked", true)
          console.log(adminChecked)
            navigate('/admin');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            adminCheck('');
            console.log(adminCheck);
        }

    }

    return (
        <>
            <div id='main'>
                <div className='admin_wrap'>
                    <div className='admin_title_wrap'>
                        <h2>관리자 페이지</h2>
                    </div>
                    <div className='admin_pwcheck_wrap'>
                        <div className='admin_pwcheck_text'>
                            관리자 비밀번호를 입력해주세요.
                        </div>
                        <div className='admin_input_wrap'>
                            <input type='password' value={adminCheck} placeholder='관리자 비밀번호를 입력해주세요.' onChange={onChangeAdmin} autoComplete='off' />
                        </div>
                        <div className='admin_input_wrap'>
                            <input type='button' id='admin' onClick={handlerOnClick} value='입력완료' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminAuth;