import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import '../CSS/AdminQna.css'
import AdminQnaModal from "./AdminQnaModal";


const AdminBoard = () => {

  let [qnaModal, setQnaModal] = useState(false);
  const [qnaDatas, setQnaDatas] = useState([]);
  const [qnaIdx, setQnaIdx] = useState();
  

  useEffect(() => {
    const admin = sessionStorage.getItem('adminCheck')
    if (admin !== '1') {
      alert("관리자만 접근 가능합니다.");
      Navigate('/login');
    }
  }, [])


  useEffect(() => {
    axios.get("http://localhost:8080/admin/qna")
      .then(response => {
        setQnaDatas(response.data);
      })
      .catch(error => { console.log(error); });
  }, []);

  return (
    <>
      <div className="adminqna_list">
        <div className="adminqna_header"><strong>관리자 QNA</strong></div>
        <table className="review-table">
          <thead >
            <tr>
              <th width="11%">글번호</th>
              <th width="16%">상품번호</th>
              <th width="40%">제목</th>
              <th width="15%">작성자</th>
              <th width="11%">작성일자</th>
              <th width="7%">답변상태</th>
            </tr>
          </thead>
          <tbody>
            {
              qnaDatas && qnaDatas.map((result) => (
                <>
                  <tr onClick={() => { setQnaIdx(result.qnaIdx); }}>
                    <td width="11%">{result.qnaIdx}</td>
                    <td width="16%">{result.itemIdx}</td>
                    <td width="40%" onClick={() => { setQnaModal(!qnaModal); }}>{result.qnaTitle}</td>
                    <td width="15%">{result.memEmail}</td>
                    <td width="11%">{result.qnaWriteDate}</td>
                    <td width="7%">{result.qnaAns === 'Y' ? '답변완료' : '답변대기'}</td>
                  </tr>
                  {qnaModal === true && qnaIdx === result.qnaIdx ? (
                    <AdminQnaModal value={result.qnaIdx} />
                  ) : null}
                </>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminBoard;