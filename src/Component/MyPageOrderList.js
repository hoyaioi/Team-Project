import '../CSS/MyPageOrderList.css';
import s6 from '../Img/s6.jpg'

function MyPageOrderList() {
    return (
        <>
            <div className='myorderlist_wrap'>
                <div className='myorderlist_stat_wrap'>
                    <ul>
                        <li>

                            <div className='myorderlist_stat'>
                                주문완료
                            </div>
                            <div className='myorderlist_stat_count'>
                                1
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
                                1
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                배송완료
                            </div>
                            <div className='myorderlist_stat_count'>
                                1
                            </div>
                        </li>
                        <li>
                            <div className='myorderlist_stat'>
                                취소/반품
                            </div>
                            <div className='myorderlist_stat_count'>
                                1
                            </div>
                        </li>
                    </ul>
                </div>


                <div className='myorderlist_order_wrap'>
                    <ul>
                        
                        <li>
                            <div className='myorderlist_item_img_wrap'>
                                <img src={s6} className='myorderlist_item_img' />
                            </div>
                            <div className='myorderlist_order_detail'>
                                <span>2022.10.12</span>
                                <span>주문번호 : 2022101200000000</span>
                                <p>제품이름ㅇㅇㅇㅇㅇㅇㅂㅇㅇㅇffffffffffffffddddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇ</p>
                                <p>가격</p>
                            </div>
                            <div className='myorderlist_order_stat_wrap'>
                                <div className='myorderlist_order_stat'>
                                    배송준비중
                                </div>
                                <div className='myorderlist_order_btn'>
                                    <button>주문취소</button>
                                </div>
                                <div className='myorderlist_order_btn'>
                                    <button>반품신청</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default MyPageOrderList;