import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../CSS/MyRefund.css";
import s3 from "../Img/s3.jpg";
import Paging from "./Paging";

function MyRefund({ memIdx }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/mypage/myrefund/${memIdx}`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;
  const count = datas.length;
  const [pagecount, setPageCount] = useState(10);

    const handlerRefundCancel = (orderNum, refundIdx) => {
        if(window.confirm('해당 주문 건의 반품을 철회하시겠습니까?')){
        axios.put(`http://localhost:8080/mypage/myrefund/refundcancel/${orderNum}`)
        .then(response => {
            if(response.status === 200){
                axios.put(`http://localhost:8080/mypage/myrefund/removerefund/${refundIdx}`)
                .then(response => {
                    if(response.status === 200){
                        alert('반품신청을 철회하였습니다.');
                        window.location.reload();
                    }
                })
                .catch(error => console.log(error));
            }
        })
        .catch(error => alert('오류발생!!!'));
    }
    }

    return (
        <>
            <div id='main'>
                <div className='myrefund_wrap'>
                    <div className='myrefund_title_wrap'>
                        <h2>반품/환불</h2>

                    </div>
                    <div className='myrefund_list_wrap'>
                        <table>
                            <thead>
                                <tr>
                                <td>제품정보</td>
                                <td>반품신청일</td>
                                    <td>주문번호</td>
                                    <td>반품사유</td>
                                    <td>환불금액</td>
                                    <td>반품상태</td>
                                </tr>
                            </thead>
                            <tbody>
                            {datas.slice(offset, offset + 10).map((refund, idx)=> (
                                    <tr key={idx}>
                                    <td className='myrefund_item_info_td'>
                                        <div className='myrefund_item_info_wrap'>
                                            <img src={s3} className='myrefund_item_img' />
                                            <div className='myrefund_item_name'>
                                                {refund.itemName}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {refund.refundDate}
                                    </td>
                                    <td>
                                        {refund.orderNum}
                                    </td>
                                    <td className='myrefund_refund_reason_td'>
                                        {refund.refundReason}
                                    </td>
                                    <td className='myrefund_item_price_td'>
                                        {refund.itemPrice}
                                    </td>
                                    <td className='myrefund_status_btn_td'>
                                        <input type='hidden' value={refund.refundIdx} />
                                        {refund.refundStatus}
                                        {refund.refundStatus === '반품진행중' ? 
                                        <div><button onClick={() => handlerRefundCancel(refund.orderNum, refund.refundIdx)}>반품철회</button></div> : ''}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <Paging page={page} setPage={setPage} count={count} pagecount={pagecount}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyRefund;
