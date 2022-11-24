import axios from "axios";
import React, { useEffect, useState } from "react";


export default function AdminReview() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/refund`, { 
      headers: { 
      'Authorization': `Bearer ${sessionStorage.getItem("token")}` 
    }
  })
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handlerRefund = (refundIdx) => {
    if(window.confirm('해당 주문 건을 환불처리 하시겠습니까?')){
    axios.put(`http://localhost:8080/admin/refund/${refundIdx}`,null, { 
      headers: { 
      'Authorization': `Bearer ${sessionStorage.getItem("token")}` 
    }
  })
      .then(response => {
        alert('반품완료 처리되었습니다.');
        window.location.reload();
      })
      .catch(error => console.log(error));
    }
  }

  return (
    <>
      <div id="main">
        <div className="admin_container">
          <div className="admin_title">
            반품관리
          </div>
          <div className="admin_table">
            <table>
              <thead >
                <tr>
                  <td className="admin_review_idx">회원번호</td>
                  <td className="admin_refund_ordernum">주문번호</td>
                  <td className="admin_refund_itemname">제품명</td>
                  <td className="admin_refund_reason">반품사유</td>
                  <td className="admin_review_date">반품신청일</td>
                  <td className="admin_review_date">환불금액</td>
                  <td className="admin_refund_status" colSpan={2}>반품상태</td>
                </tr>
              </thead>
              <tbody>
                {datas.map((refund, idx) => (
                  <tr key={idx}>
                    <td>{refund.memIdx}</td>
                    <td>{refund.orderNum}</td>
                    <td>{refund.itemName}</td>
                    <td>{refund.refundReason}</td>
                    <td>{refund.refundDate}</td>
                    <td>{refund.itemPrice}</td>
                    <td>{refund.refundStatus}</td>
                    <td>
                      <input type="hidden" value={refund.refundIdx} />
                      <div className="admin_btn">
                        {refund.refundStatus === '반품진행중' ? <button type='button' onClick={() => handlerRefund(refund.refundIdx)}>환불처리</button> : ''}
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