import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../CSS/AdminMain.css';


export default function AdminMain() {

  return (
    <>
      <div id="main">
        <div className="admin_main_wrap">
          <Link to = 'member'><div>회원관리</div></Link>
          <Link to = ''><div>주문관리</div></Link>
          <Link to = 'refund'><div>반품관리</div></Link>
          <Link to = 'review'><div>리뷰관리</div></Link>
          </div>
          <Outlet />
      </div>
    </>
  );
};