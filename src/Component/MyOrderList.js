import axios from 'axios';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/MyOrderList.css';
import s6 from '../Img/s6.jpg'
import Paging from './Paging';
import RefundApp from './RefundApp';


function MyOrderList({memIdx}) {

    const [datas, setDatas] = useState([]);

    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);
    let [count5, setCount5] = useState(0);

    let countCheck = (datas) => {

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        let count5 = 0;

        for (let i = 0; i < datas.length; i++) {
            if (datas[i].orderStatus == '주문완료') {
                count1++;
            } else if (datas[i].orderStatus == '상품준비중') {
                count2++;
            } else if (datas[i].orderStatus == '배송중') {
                count3++;
            } else if (datas[i].orderStatus == '배송완료') {
                count4++;
            } else if (datas[i].orderStatus == '구매확정') {
                count5++;
            }
        }

        setCount1(count1);
        setCount2(count2);
        setCount3(count3);
        setCount4(count4);
        setCount5(count5);
    }

    const handlerCancelNow = (orderNum) => {
        if (window.confirm('해당 상품의 주문을 취소하시겠습니까?')) {
            axios.put(`http://localhost:8080/mypage/myorderlist/now/${orderNum}`)
                .then(response => {
                    if (response.status === 200) {
                        alert('취소가 완료되었습니다.');
                        window.location.reload();
                    } else {
                        alert('취소가 실패하였습니다.');
                    }
                })
                .catch(error => console.log(error));
        }
    }

    const handlerCancelPlz = (orderNum) => {
        if (window.confirm('발송 준비 중인 상품입니다. \n취소 신청 하시겠습니까?')) {
            axios.put(`http://localhost:8080/mypage/myorderlist/plz/${orderNum}`)
                .then(response => {
                    if (response.status === 200) {
                        alert('신청이 완료되었습니다. \n판매자의 승인 후 취소가 완료됩니다.');
                        window.location.reload();
                    } else {
                        alert('취소가 실패하였습니다.');
                    }
                })
                .catch(error => console.log(error));
        }
    }

    //////////////////////////////////////////// 페이지

    const [page, setPage] = useState(1);
    const offset = (page - 1) * 10;
    const count = datas.length;

    useEffect(() => {
        axios.get(`http://localhost:8080/mypage/myorderlist/${memIdx}`)
            .then(response => {
                setDatas(response.data);
                countCheck(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const [openApp, setOpenApp] = useState(false);

    const [orderNum, setOrderNum] = useState(0);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [itemNum, setItemNum] = useState(0);

    const handlerOpenApp = (orderNum, itemName, itemPrice) => {
  
        setItemPrice(itemPrice);
        setItemName(itemName);
        setOrderNum(orderNum);
        setOpenApp(true);
    }

    const navigate = useNavigate();

    const handlerPurchase = (memIdx, itemName, itemNum, orderNum) => {
        if (window.confirm('구매확정 후 반품신청이 어렵습니다. \n구매확정 하시겠습니까?')) {
            axios.put(`http://localhost:8080/mypage/myorderlist/purchase/${orderNum}`)
                .then(response => {
                    if(response.status === 200){
                    axios.post(`http://localhost:8080/mypage/myorderlist/purchase/${orderNum}`, {
                        'memIdx': memIdx,
                        'itemName': itemName,
                        'itemNum': itemNum,
                        'orderNum': orderNum
                    })
                        .then(response => {
                            if(response.status === 200){
                                alert('구매확정 처리되었습니다. \n해당 상품의 리뷰를 작성해주세요!');
                                window.location.reload();
                            }
                        })
                        .catch(error => console.log(error));
                    }
                })
                .catch(error => alert('오류발생!!!'));
        }
    }

    const handlerMoveReivew = () => {
        navigate('/mypage/myreview');
    }

    return (
        <>
            <div id='main'>
                <div className='myorderlist_wrap'>
                    {openApp ? <RefundApp setOpenApp={setOpenApp} memIdx={memIdx} itemNum={itemNum} orderNum={orderNum} itemName={itemName} itemPrice={itemPrice} /> : <>
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
                                        상품준비중
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
                                <li>
                                    <div className='myorderlist_stat'>
                                        구매확정
                                    </div>
                                    <div className='myorderlist_stat_count'>
                                        {count5}
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
                                    {datas.slice(offset, offset + 10).map(order => (
                                        <tr key={order.orderNum}>
                                            <td className='myorderlist_item_info_td'>
                                                <div className='myorderlist_item_info_wrap'>
                                                    <img src={s6} className='myorderlist_item_img' />
                                                    <div className='myorderlist_item_name'>
                                                        {order.itemName}
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
                                                <input type='hidden' value={order.itemNum} />
                                                <input type='hidden' value={order.memIdx} />
                                                <div>
                                                    {order.orderStatus === '취소완료' ? '' : null}
                                                    {order.orderStatus === '취소처리중' ? '' : null}
                                                    {order.orderStatus === '주문완료' ? (<button type='button' onClick={() => handlerCancelNow(order.orderNum)}>취소요청</button>) : ''}
                                                    {order.orderStatus === '상품준비중' ? (<button type='button' onClick={() => handlerCancelPlz(order.orderNum)}>취소요청</button>) : ''}
                                                    {order.orderStatus === '배송중' ? (<button type='button'>배송조회</button>) : ''}
                                                    {order.orderStatus === '배송완료' ? (
                                                        <>
                                                            <button type='button'>배송조회</button>
                                                            <button type='button' onClick={() => handlerOpenApp(order.orderNum, order.itemName, order.itemPrice)}>반품요청</button>
                                                            <button type='button' onClick={() => handlerPurchase(order.memIdx, order.itemName, order.itemNum, order.orderNum)}>구매확정</button>
                                                        </>
                                                    ) : ''}
                                                    {order.orderStatus === '구매확정' ? (<>
                                                        <button type='button'>배송조회</button>
                                                        <button type='button' onClick={handlerMoveReivew}>리뷰작성</button>
                                                    </>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <Paging page={page} setPage={setPage} count={count} />
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default MyOrderList;