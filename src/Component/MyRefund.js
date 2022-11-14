import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import '../CSS/MyRefund.css';
import s3 from '../Img/s3.jpg';
import Paging from './Paging';

function MyRefund({memIdx}) {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/mypage/myrefund/${memIdx}`)
        .then(response => {
            setDatas(response.data);
        })
        .catch(error => console.log(error));
    }, []);
    
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 10;
    const count = datas.length;

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
                            {datas.slice(offset, offset + 10).map(refund => (
                                    <tr key={refund.orderNum}>
                                    <td className='myrefund_item_info_td'>
                                        <div className='myrefund_item_info_wrap'>
                                            <img src={s3} className='myrefund_item_img' />
                                            <div className='myrefund_item_name'>
                                                고려은단 비타민C 1000 이지 + 비타민 D ㅇㅇㅇㅇㅇㅇ
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {refund.refundDate}
                                    </td>
                                    <td>
                                        {refund.orderNum}
                                    </td>
                                    <td>
                                        {refund.refundReason}
                                    </td>
                                    <td className='myrefund_item_price_td'>
                                        {refund.refundAmount}
                                    </td>
                                    <td>
                                        반품진행중
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <Paging page={page} setPage={setPage} count={count} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyRefund;