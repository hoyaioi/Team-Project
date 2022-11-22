import axios from "axios";
import React, { useEffect, useState } from "react";


export default function AdminReview() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/review`)
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div id="main">
        <div className="mypage_main_wrap">
        <div className="adminorder_list">
          <div className="adminorder_header">
            <strong>관리자 리뷰목록</strong>
          </div>
          <table className="admin_order_table">
            <thead >
              <tr>
                <th width="10%">리뷰번호</th>
                <th width="10%">회원번호</th>
                <th width="10%">주문번호</th>
                <th width="30%">리뷰내용</th>
                <th width="11%">작성일</th>
                <th width="17%">수정일</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>

              {datas.map((review, idx) => (
                <tr key={idx}>
                  <td width="10%">{review.reviewIdx}</td>
                  <td width="10%">{review.memIdx}</td>
                  <td width="30%">{review.orderNum}</td>
                  <td width="10%">{review.reviewContents}</td>
                  <td width="11%">{review.reviewWriteDate}</td>
                  <td width="17%">{review.reviewUpdateDate}</td>
                  <td>
                    <div><button>삭제</button></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        </div>
    </>
  );
};