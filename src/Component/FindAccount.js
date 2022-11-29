import '../CSS/reset.css';
import '../CSS/findAccount.css';
import { Link } from 'react-router-dom';

function FindAccount() {
    return (
        <>

            <div className="findAccount_wrapper">

                <div className="findAccount_btn_wrapper">
                    <Link to="/findID"><button className="findID btn text" type="button">아이디 찾기</button></Link>
                    <Link to="/findPW"><button className="findPW btn text" type="button">비밀번호 찾기</button></Link>
                </div>

            </div>
        </>


    )

}

export default FindAccount;