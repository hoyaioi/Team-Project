import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import '../CSS/MyOrderList.css';
import s6 from '../Img/s6.jpg'
import Paging from './Paging';

function MyOrderList({memIdx}) {

    const [data, setData] = useState([]);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    
    
    
    useEffect(() => {
        axios.get(`http://localhost:8080/mypage/myorderlist/${memIdx}`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => console.log(error));
    }, []);


    
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
                                {count1}
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송준비중
                            </div>
                            <div className='myorderlist_stat_count'>
                                {count2}
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송중
                            </div>
                            <div className='myorderlist_stat_count'>
                                {count3}
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송완료
                            </div>
                            <div className='myorderlist_stat_count'>
                                {count4}
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
                            {data && data.map(order => (
                                <tr key={order.orderNum}>
                                <td className='myorderlist_item_info_td'>
                                    <div className='myorderlist_item_info_wrap'>
                                        <img src={s6} className='myorderlist_item_img' />
                                        <div className='myorderlist_item_name'>
                                            {order.itemNum}
                                        </div>
                                    </div>
                                </td>
                                <td className='myorderlist_order_date_td'>
                                    {order.orderDate}
                                </td>
                                <td>
                                    {order.orderNum}
                                </td>
                                <td className='myorderlist_item_price_td'>
                                    {order.itemPrice}
                                </td>
                                <td className='myorderlist_item_count_td'>
                                    {order.itemAmount}
                                </td>
                                <td className='myorderlist_order_stat_td'>
                                    {order.orderStatus}
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
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <Paging />
                    </div>

                </div>
            </div>
            </div>
        </>
    );
}

export default MyOrderList;