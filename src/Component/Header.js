import { Link } from "react-router-dom";
import "../CSS/Header.css";
import Nav from "./Nav";

const Header = () => {

  //조건부 렌더링으로 로그인 여부에 따라 다른 헤더를 보여준다.

  const isLogin = sessionStorage.getItem("memIdx") ? true : false;
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
    alert("로그아웃 되었습니다.");
  };

  return (
    <>

        <div id="header">
          <div className="header_top">
            <div className="header_logo_wrap">
              <Link to="/">
                <img className="header_logo_img" src="/images/logo.png" />
              </Link>
            </div>
            <div className="header_search_wrap">
              <div className="header_search_area">
                <input
                  type="text"
                  className="header_search_bar"
                  spellCheck="false"
                  maxLength="64"
                />
                <button type="submit" className="header_search_btn">
                  <div className="header_search_img" />
                </button>
              </div>
            </div>
            <div className="header_btn_wrap">
              <div className="header_btn_area">
                <ul className="header_btn_ul">
                  {isLogin ? (
                    <>
                      <li>
                        {sessionStorage.getItem("memName")}님
                      </li>
                      <li>
                        <Link to onClick={logout}>로그아웃</Link>
                      </li>
                    </>
                  ) : (
                    <><li>
                      <Link to="/login">로그인</Link>
                    </li><li>
                        <Link to="/join">회원가입</Link>
                      </li></>
                  )}

                  <li>
                    <Link to="/write">작성하기</Link>
                  </li>
                  <li>
                    <Link to="/mypage/myorderlist">마이페이지</Link>
                  </li>
                  <li>
                    <Link to="/service/center">고객센터</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      <Nav />
    </>
  );
};

export default Header;
