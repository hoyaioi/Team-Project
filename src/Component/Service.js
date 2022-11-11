import React from "react";
import { Link, Outlet } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div id="serviceqna_container">
        <div id="serviceqna_contents">
          <div className="serviceqna_main_contents">
            <div className="serviceqna_side_cont">
              <div className="serviceqna_side_box">
                <h2>고객센터</h2>
                <ul className="serviceqna_side_menu">
                  <Link to="center">
                    <li>FAQ</li>
                  </Link>
                  <Link to="notice">
                    <li>공지사항</li>
                  </Link>
                  <Link to="serviceqna">
                    <li>1:1문의</li>
                  </Link>
                </ul>
              </div>
              <div className="serviceqna_side_info">
                <ul>
                  <li>고객상담센터</li>
                  <li>
                    <strong className="serviceqna_num">1818-1818</strong>
                  </li>
                  <li>test@test.com</li>
                  <li>월 ~ 금 09 : 00 ~ 18 : 00</li>
                  <li>점심시간 12: 00 ~ 13 : 00</li>
                  <li>공휴일 / 토,일 휴무</li>
                </ul>
              </div>
            </div>
            <div className="serviceqna_main_cont">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
