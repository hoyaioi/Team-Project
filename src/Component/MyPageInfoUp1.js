import '../CSS/MyPageInfoUp1.css';

function MyPageInfoUp1({handleIsNow}) {
    const handlerOnClick = (e) => {
        handleIsNow(e);
    }

    return (
        <>
            <div className='pw_wrap'>
                <div className='pw_area'>
                    <div className='pw_title'>
                        회원정보수정
                    </div>
                    <div>
                        비밀번호를 입력해주세요.
                    </div>
                    <div>
                        <input type='password' className='input_password' placeholder='password' autoComplete='off'/>
                    </div>
                    <div>
                        <input type='button' name='InfoUp2' className='submit_pw' value='입력완료' onClick={handlerOnClick}/>
                    </div>
                </div>
                </div>
        </>
    );
}

export default MyPageInfoUp1;