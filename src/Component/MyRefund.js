import '../CSS/MyRefund.css';
import s3 from '../Img/s3.jpg';
import Paging from './Paging';

function MyRefund() {
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
                                <tr>
                                    <td className='myrefund_item_info_td'>
                                        <div className='myrefund_item_info_wrap'>
                                            <img src={s3} className='myrefund_item_img' />
                                            <div className='myrefund_item_name'>
                                                고려은단 비타민C 1000 이지 + 비타민 D ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        2022.10.29
                                    </td>
                                    <td>
                                        20221024000001
                                    </td>
                                    <td>
                                        단순변심
                                    </td>
                                    <td className='myrefund_item_price_td'>
                                        38,900원
                                    </td>
                                    <td>
                                        반품진행중
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <Paging />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyRefund;