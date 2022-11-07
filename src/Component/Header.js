import { Link } from "react-router-dom";
import "../CSS/Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div id="header_wrap">
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
                  <li>
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/join">회원가입</Link>
                  </li>
                  <li>
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                  <li>
                    <Link to="/servicecenter">고객센터</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </>

  );
};

export default Header;
