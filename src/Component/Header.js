import "../CSS/Header.css";
import { Link } from "react-router-dom";
import Intro from "../survey/Intro";
import search from '../Img/search.png';
import logo from '../Img/logo.png';

const Header = () => {
  if (window.location.pathname === '/intro') return null;
  return (
    <div id="header">
      <div className="header_top">
        <div className="header_logo_wrap">
          <Link to="/"><a href=""><img className="header_logo_img" src={logo}/></a></Link>
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
                <a href="">로그인</a>
              </li>
              <li>
                <a href="">회원가입</a>
              </li>
              <li>
                <Link to="/mypage"><a href="">마이페이지</a></Link>
              </li>
              <li>
                <Link to="/cart"><a href="">장바구니</a></Link>
              </li>
              <li>
                <Link to="/servicecenter"><a href="">고객센터</a></Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="header_menu_wrap">
        <div className="header_menu_area">
        <ul className="header_menu_ul">
          <li>
            <Link to='/itemlist'><button>전체상품</button></Link>
          </li>
          <li>
            <button>BEST</button>
          </li>
          <li>
            <button>기능별</button>
          </li>
          <li>
            <button>대상별</button>
          </li>
          <li>
            <button>성분별</button>
          </li>
          <li>
            <Link to="/intro" ><button className="header_research_btn">설문하기</button></Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;