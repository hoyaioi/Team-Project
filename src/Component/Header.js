import "../CSS/Header.css";
import { Link } from "react-router-dom";
import Intro from "../survey/Intro";
import search from "../Img/search.jpg"

const Header = () => {

  return (
    <div id="header">
      <div className="header_top">
        <div className="header_logo_wrap">
          <a href="/">로고이미지</a>
        </div>
        <div className="header_search_wrap">
          <div className="header_search_area">
            <input
              type="text"
              className="header_search_bar"
              spellCheck="false"
              maxLength="64"
            />
            <button
              type="submit"
              className="header_search_btn"
            >
              <img
                src={search}
                className="header_search_img"
              />
            </button>
          </div>
        </div>
        <div className="header_btn_wrap">
          <div className="header_btn_area">
            <ul className="header_btn_ul">
              <li>
                <a>로그인</a>
              </li>
              <li>
                <a>회원가입</a>
              </li>
              <li>
                <a href="/mypage">마이페이지</a>
              </li>
              <li>
                <a href="/mycart">장바구니</a>
              </li>
              <li>
                <a>고객센터</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Header;