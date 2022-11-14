
import React from "react";

import { Link, useLocation } from "react-router-dom";
import "../CSS/Nav.css";

const Nav = () => {


  return (
    <div className="header_menu_wrap">
      <div className="header_menu_area">
        <ul className="header_menu_ul">
          <li>
            <Link to="/itemlist" state={{ category: null }}>
              <button>전체상품</button>
            </Link>
          </li>
          <li>
            <Link to="/itemlist" state={{ category: '추천' }}>
              <button>BEST</button>
            </Link>
          </li>
          <li>
            <Link to="/itemlist" state={{ category: '기능별'}}>
              <button>기능별</button>
            </Link>
          </li>
          <li>
            <button>대상별</button>
          </li>
          <li>
            <button>성분별</button>
          </li>
          <li>
            <Link to="/intro">
              <button className="header_research_btn">설문하기</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
