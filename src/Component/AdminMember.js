import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/AdminBoard.css";


const AdminMember = () => {

  const [memList, setMemList] = useState([]);
  //관리자 페이지 구현

  //관리자 페이지 기능

  //회원 정보 검색

  //회원 리스트 출력
  //회원 정보 출력
  //회원 정보 수정
  //회원 탈퇴
  //회원 정보 수정
  useEffect(() => {
    axios.get("http://localhost:8080/api/member/list").then((res) => {
      console.log(res.data);
      setMemList(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th width="4%">회원번호</th>
              <th width="10%">아이디</th>
              <th width="4%" >이름</th>
              <th width="3%">전화번호</th>
              <th width="10%">생년월일</th>
              <th width="27%">주소</th>
              <th width="10%">상세 주소</th>
              <th width="3%">성별</th>
              <th width="13%">가입일</th>
              <th width="5%">탈퇴여부</th>
              <th width="5%">관리자여부</th>
              <th width="3%">수정</th>
              <th width="3%">삭제</th>
            </tr>
          </thead>
          <tbody>
            {memList.map((mem) => (
              <tr key={mem.memIdx}>
                <td>{mem.memIdx}</td>
                <td>{mem.memEmail}</td>
                <td>{mem.memName}</td>
                <td>{mem.memPhone}</td>
                <td>{mem.memBirth}</td>
                <td>{mem.memAddr1}</td>
                <td>{mem.memAddr2}</td>
                <td>{mem.memGender}</td>
                <td>{mem.memRegDate}</td>
                <td> {mem.memDeletedYn === "N" ? (
                  <td>X</td>
                ) : (
                  <td>{mem.memDelDate}</td>
                )}</td>
                <td>{mem.memRole === 1 ? "관리자" : "일반회원"}</td>
                <td>
                  <a href={`/api/member/update/${mem.memIdx}`}>수정</a>
                </td>
                <td>
                  <a href={`/api/member/delete/${mem.memIdx}`}>삭제</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminMember;