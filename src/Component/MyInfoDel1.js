import '../CSS/MyInfoDel1.css';

function MyInfoDel1() {

    const onDeleteMember = () => {
        if(window.confirm('정말 탈퇴하시겠습니까?'))
            alert('탈퇴가 완료되었습니다.');
    }

    return (
        <>
            <div id='main'>
                <div className='myinfodel1_wrap'>
                <div className='myinfodel1_title_wrap'>
                    <h2>회원탈퇴</h2>
                    </div>
                    <div className='myinfodel1_pwcheck_wrap'>
                        <div className='myinfodel1_pwcheck_text'>
                            비밀번호를 입력해주세요.
                        </div>
                        <div className='myinfodel1_input_wrap'>
                            <input type='password' placeholder='password' autoComplete='off' />
                        </div>
                        <div className='myinfodel1_input_wrap'>
                            <input type='button' onClick={onDeleteMember} value='입력완료' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyInfoDel1;