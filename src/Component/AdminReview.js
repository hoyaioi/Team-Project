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

  const handlerBlind = (reviewIdx) => {
    if(window.confirm('해당 리뷰를 블라인드 처리할까요?')){
    axios.delete(`http://localhost:8080/admin/review/remove/${reviewIdx}`)
      .then(response => {
        if(response.status === 200){
          alert('블라인드 성공');
          window.location.reload();
        }
      })
      .catch(error => console.log(error));
    }
  }

  const handlerShow = (reviewIdx) => {
    if(window.confirm('해당 리뷰를 블라인드 해제할까요?')){
      axios.delete(`http://localhost:8080/admin/review/show/${reviewIdx}`)
        .then(response => {
          if(response.status === 200){
            alert('블라인드 해제완료');
            window.location.reload();
          }
        })
        .catch(error => console.log(error));
      }
  }

  return (
    <>
      <div id="main">
        <div className="admin_container">
          <div className="admin_title">
            관리자 리뷰목록
          </div>
          <div className="admin_table">
            <table>
              <thead >
                <tr>
                  <td className="admin_review_idx">리뷰번호</td>
                  <td className="admin_review_idx">회원번호</td>
                  <td className="admin_review_ordernum">주문번호</td>
                  <td className="admin_review_contents">리뷰내용</td>
                  <td className="admin_review_date">작성일</td>
                  <td className="admin_review_date">수정일</td>
                  <td className="admin_review_blind" colSpan={2}>블라인드</td>
                </tr>
              </thead>
              <tbody>
                {datas.map((review, idx) => (
                  <tr key={idx}>
                    <td>{review.reviewIdx}</td>
                    <td>{review.memIdx}</td>
                    <td>{review.orderNum}</td>
                    <td>{review.reviewContents}</td>
                    <td>{review.reviewWriteDate}</td>
                    <td>{review.reviewUpdateDate}</td>
                    <td className="admin_review_blind">{review.reviewDeleteYn}</td>
                    <td>
                      <div className="admin_btn">
                        <button onClick={() => handlerBlind(review.reviewIdx)}>비노출</button>
                        <button onClick={() => handlerShow(review.reviewIdx)}>노출</button>
                      </div>
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