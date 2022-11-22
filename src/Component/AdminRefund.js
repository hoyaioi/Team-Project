import axios from "axios";
import React, { useEffect, useState } from "react";


export default function AdminRefund() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/refund`)
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => console.log(error));
  }, []);



  return (
    <>
      <div id="main">
        <div className="adminorder_list">
          <div className="adminorder_header"><strong>관리자 반품목록</strong></div>
          <table className="admin_order_table">
            <thead >
              <tr>
                <th width="10%">반품번호</th>
                <th width="10%">회원번호</th>
                <th width="30%">주문번호</th>
                <th width="10%">반품신청일</th>
                <th width="11%">반품사유</th>
                <th width="17%">환불금액</th>
                <th>반품상태</th>
              </tr>
            </thead>
            <tbody>

              {datas.map((refund, idx) => (
                <tr key={idx}>
                  <td width="10%">{refund.refundIdx}</td>
                  <td width="10%">{refund.memIdx}</td>
                  <td width="30%">{refund.orderNum}</td>
                  <td width="10%">{refund.refundDate}</td>
                  <td width="11%">{refund.refundReason}</td>
                  <td width="17%">{refund.itemPrice}</td>
                  <td>
                    <button>환불처리</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};