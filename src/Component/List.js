import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/List.css";
import MemberList from "./MemberList";

const List = () => {
  const [datas, setDatas] = useState([]);

  const [page, setPage] = useState(1); // 페이지
  const limit = 10; //list 노출 최대 갯수
  const offset = (page - 1) * limit; // 시작과 끝 구하는 offset

  const postsData = (member) => {
    if (member) {
      let result = member.slice(offset, offset + limit);
      return result;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/member")
      .then((response) => {
        console.log(response);
        setDatas(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="list-container">
      <div className="list-wrap">
        <div className="service_board_title">
          <h3>회원정보</h3>
        </div>
        <div className="service_board_hot">
          <ul>
            <li>
              <Link to="">전체</Link>
            </li>
            <li>
              <Link to="">회원</Link>
            </li>
            <li>
              <Link to="">탈퇴회원</Link>
            </li>
          </ul>
        </div>
        <div className="list">
          <div className="list-top">
            <ul>
              <li>
                <input type="checkbox" />
              </li>
              <li>회원번호</li>
              <li>이름</li>
              <li>이메일</li>
              <li>가입일</li>
              <li>탈퇴이력</li>
            </ul>
          </div>
          <MemberList memlist={postsData(datas)} />
        </div>
      </div>
    </div>
  );
};

export default List;
