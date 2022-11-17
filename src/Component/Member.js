import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/List.css";
import MemberList from "./MemberList";
import MemMenu from "./MemMenu";
import Pagination from "./Pagination";

const Member = () => {
  const [datas, setDatas] = useState([]);
  // const [memDeletedYn, setMemDeletedYn] = useState();

  const [list, setList] = useState([
    { name: "전체", value: "all" },
    { name: "회원", value: "N" },
    { name: "탈퇴회원", value: "Y" },
  ]);

  const onList = (value) => {
    if (value === "all") {
      setDatas(datas);
      console.log(datas);
      console.log(setDatas(datas));
    } else {
      console.log(datas);
      setDatas(datas.filter((mem) => mem.memDeletedYn === value));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/member")
      .then((response) => {
        // setMemDeletedYn(response.data.memDeletedYn);
        setDatas(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const [page, setPage] = useState(1); // 페이지
  const limit = 15; //list 노출 최대 갯수
  const offset = (page - 1) * limit; // 시작과 끝 구하는 offset

  const postsData = (memlist) => {
    if (memlist) {
      let result = memlist.slice(offset, offset + limit);
      return result;
    }
  };

  return (
    <div className="list-container">
      <div className="list-wrap">
        <div className="service_board_title">
          <h3>회원정보</h3>
        </div>
        <MemMenu list={list} onList={onList} />
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
          <Pagination
            limit={limit}
            page={page}
            totalPosts={datas.length}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Member;
