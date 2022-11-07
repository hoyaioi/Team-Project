import '../CSS/MyOrderList.css';
import s6 from '../Img/s6.jpg'

function MyOrderList() {
    return (
        <>
        <div id='main'>
            <div className='myorderlist_wrap'>
            <div className='myorderlist_title_wrap'>
                        <h2>주문현황</h2>
                    </div>
                <div className='myorderlist_stat_wrap'>
                    <ul>
                        <li>

                            <div className='myorderlist_stat'>
                                주문완료
                            </div>
                            <div className='myorderlist_stat_count'>
                                0
                            </div>

                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송준비중
                            </div>
                            <div className='myorderlist_stat_count'>
                                1
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송중
                            </div>
                            <div className='myorderlist_stat_count'>
                                0
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송완료
                            </div>
                            <div className='myorderlist_stat_count'>
                                0
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                취소/반품
                            </div>
                            <div className='myorderlist_stat_count'>
                                0
                            </div>
                        </li>
                    </ul>
                </div>


                <div className='myorderlist_order_wrap'>
                    <table>
                        <thead>
                            <tr>
                                <td>제품정보</td>
                                <td>주문날짜</td>
                                <td>주문번호</td>
                                <td>금액</td>
                                <td>수량</td>
                                <td colSpan={2} className='myorderlist_order_stat_th'>주문상태</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='myorderlist_item_info_td'>
                                    <div className='myorderlist_item_info_wrap'>
                                        <img src={s6} className='myorderlist_item_img' />
                                        <div className='myorderlist_item_name'>
                                            고려은단 비타민C 1000 이지 + 비타민 D ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                                        </div>
                                    </div>
                                </td>
                                <td className='myorderlist_order_date_td'>
                                    2022.10.31
                                </td>
                                <td>
                                    20221031000001
                                </td>
                                <td className='myorderlist_item_price_td'>
                                    38,900원
                                </td>
                                <td className='myorderlist_item_count_td'>
                                    200
                                </td>
                                <td className='myorderlist_order_stat_td'>
                                    배송준비중
                                </td>
                                <td className='myorderlist_order_btn_td'>
                                    <div>
                                        <button type='button'>취소요청</button>
                                        </div>
                                        <div>
                                        <button type='button'>배송조회</button>
                                        </div>
                                        <div>
                                        <button type='button'>반품요청</button>
                                        </div>
                                   
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
            </div>
            </div>
        </>
    );
}

export default MyOrderList;