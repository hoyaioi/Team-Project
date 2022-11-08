import '../CSS/MyInfoUp1.css';

function MyInfoUp1({ memIdx, handleIsNow }) {
    const handlerOnClick = (e) => {
        handleIsNow(e);
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
                            비밀번호를 입력해주세요.
                        </div>
                        <div className='myinfoup1_input_wrap'>
                            <input type='password' placeholder='password' autoComplete='off' />
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