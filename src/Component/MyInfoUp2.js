import '../CSS/MyInfoUp2.css';

function MyInfoUp2() {
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
                                        <input type='text' className='myinfoup2_readonly' readOnly value='김선용' />
                                    </div>
                                </div>
                                <div className='myinfoup2_phone_wrap'>
                                    <div className='myinfoup2_text'>휴대폰번호</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' placeholder="연락처('-'제외)를 입력해주세요." />
                                    </div>
                                </div>
                                <div className='myinfoup2_adr_wrap'>
                                    <div className='myinfoup2_text'>주소</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' className='myinfoup2_post' readOnly placeholder='우편번호' />
                                        <input type='button' className='myinfoup2_search' value='검색' />
                                    </div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' className='myinfoup2_readonly' readOnly />
                                    </div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='text' placeholder="상세 주소를 입력해주세요." />
                                    </div>
                                </div>
                            </div>
                            <div className='myinfoup2_id_wrap'>
                                <div className='myinfoup2_email_wrap'>
                                    <div className='myinfoup2_text'>이메일 (ID)</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='email' className='myinfoup2_readonly' readOnly value='test@naver.com'/>
                                    </div>
                                </div>
                                <div className='myinfoup2_pw_wrap'>
                                    <div className='myinfoup2_text'>비밀번호</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='password' placeholder="비밀번호를 입력해주세요." />
                                    </div>
                                </div>
                                <div className='myinfoup2_pw_wrap'>
                                    <div className='myinfoup2_text'>비밀번호 확인</div>
                                    <div className='myinfoup2_input_wrap'>
                                        <input type='password' placeholder="비밀번호를 다시 입력해주세요." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='myinfoup2_btn_wrap'>
                            <input type='button' className='myinfoup2_btn_cancle' value='취소' />
                            <input type='button' className='myinfoup2_btn_modify' value='수정하기' />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default MyInfoUp2;