import '../CSS/MyPageUnregister.css';

function MyPageUnregister() {

    const onDeleteMember = () => {
        if(window.confirm('정말 탈퇴하시겠습니까?'))
            alert('탈퇴가 완료되었습니다.');
    }

    return (
        <>
            <div className='pw_wrap'>
                <div className='pw_area'>
                    <div className='pw_title'>
                        회원탈퇴
                    </div>
                    <div>
                        비밀번호를 입력해주세요.
                    </div>
                    <div>
                        <input type='password' className='input_password' placeholder='password' autoComplete='off' />
                    </div>
                    <div>
                        <input type='button' className='submit_pw' onClick={onDeleteMember} value='입력완료' />
                    </div>
                </div>
                </div>
        </>
    );
}

export default MyPageUnregister;