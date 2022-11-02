import '../CSS/MyPageInfoUp2.css';

function MyPageInfoUp2() {
    return (
        <>
            <h1> 회원정보수정 </h1>
            <form>
                <div className='updateformarea'>
                    <div className='member_name'>
                        <div className='label'>이름 <label className='namehelp'>{'(이름 변경을 희망하실 경우 고객센터로 문의 바랍니다.)'}</label></div>
                        <div className='input_wrap'>
                            <input type='text' className='input_name' readOnly value='김선용'/>
                        </div>
                    </div>
                    <div className='member_phone'>
                        <div className='label'>휴대폰번호</div>
                        <div className='input_wrap'>
                            <input type='text' className='input_phone' placeholder="연락처('-'제외)를 입력해주세요." />
                        </div>
                    </div>
                    <div className='member_adr'>
                        <div className='label'>주소</div>
                        <div className='input_wrap'>
                            <input type='text' className='post_num' readOnly placeholder='우편번호' />
                            <input type='button' className='search_adr' value='검색' />
                        </div>
                        <div className='input_wrap'>
                            <input type='text' className='base_adr' readOnly placeholder='api로 검색된 기본 주소' />
                        </div>
                        <div className='input_wrap'>
                            <input type='text' className='input_adr' placeholder="상세 주소를 입력해주세요." />
                        </div>
                    </div>
                    <div className='member_email'>
                        <div className='label'>이메일</div>
                        <div className='input_wrap'>
                            <input type='email' className='input_email' placeholder="이메일을 입력해주세요." />
                        </div>
                    </div>
                    <div className='member_pw'>
                        <div className='label'>비밀번호</div>
                        <div className='input_wrap'>
                            <input type='password' className='input_pw' placeholder="비밀번호를 입력해주세요." />
                        </div>
                    </div>
                    <div className='member_pwcheck'>
                        <div className='label'>비밀번호 확인</div>
                        <div className='input_wrap'>
                            <input type='password' className='input_pwcheck' placeholder="비밀번호를 다시 입력해주세요." />
                        </div>
                    </div>
                </div>
                <div className='btn_group'>
                    <input type='button' className='update_cancel' value='취소' />
                    <input type='button' className='update_ok' value='수정하기' />
                </div>
            </form>

        </>
    );
}

export default MyPageInfoUp2;