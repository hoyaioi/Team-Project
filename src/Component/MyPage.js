import '../CSS/MyPage.css';
// import MyPageCart from "./MyCart";
import MyPageOrderList from "./MyPageOrderList";
import MyPageReview from "./MyPageReview";
import MyPageInfoUp1 from "./MyPageInfoUp1";
import MyPageUnregister from "./MyPageUnregister";
import MyPageRefundList from "./MyPageRefund";
import { useState } from "react";
import MyPageResearch from "./MyPageResearch";
import MyPageInfoUp2 from './MyPageInfoUp2';

function MyPage() {

    const [isNow, setIsNow] = useState('');

    // const handleOrderList = () => {
    //     setIsNow("OrderList");
    // }
    // const handleCart = () => {
    //     setIsNow("Cart");
    // }
    // const handleRefundList = () => {
    //     setIsNow("RefundList");
    // }
    // const handleReview = () => {
    //     setIsNow("Review");
    // }
    // const handleInfoUp1 = () => {
    //     setIsNow("InfoUp1");
    // }
    // const handleUnregister = () => {
    //     setIsNow("Unregister");
    // }
    // const handleResearch = () => {
    //     setIsNow("Research");
    // }


    const handleIsNow = (e) => {
        setIsNow(e.target.id);
    }


    return (
        <>
            <div id='main'>
                <div className='mypage_main_wrap'>
                    <div className='mypage_side'>
                        <div className='mypage_profile_wrap'>
                            <div>Welcome!</div>
                            <span>이름</span> 님
                        </div>
                        <div className="mypage_sidemenu">
                            <ul>
                                <li>
                                    <div id='OrderList' onClick={handleIsNow}>
                                        주문 현황
                                    </div>
                                </li>
                                {/* <li>
                                    <a name="Cart" onClick={handleIsNow}>장바구니</a>
                                </li> */}
                                <li>
                                    <div id="RefundList" onClick={handleIsNow}>
                                        반품 환불
                                    </div>
                                </li>
                                <li>
                                    <div id="Review" onClick={handleIsNow}>
                                        나의 리뷰
                                    </div>
                                </li>
                                <li>
                                    <div id="Research" onClick={handleIsNow}>
                                        나의 설문
                                    </div>
                                </li>
                                <li>
                                    <div id="InfoUp1" onClick={handleIsNow}>
                                        나의 정보
                                    </div>
                                </li>
                                <li>
                                    <div id="Unregister" onClick={handleIsNow}>
                                        회원 탈퇴
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="mypage_component">

                        {isNow === "OrderList" && <MyPageOrderList />}
                        {/* {isNow === "Cart" && <MyPageCart />} */}
                        {isNow === "RefundList" && <MyPageRefundList />}
                        {isNow === "Review" && <MyPageReview />}
                        {isNow === "InfoUp1" && <MyPageInfoUp1 handleIsNow={handleIsNow} />}
                        {isNow === "Unregister" && <MyPageUnregister />}
                        {isNow === "Research" && <MyPageResearch />}
                        {isNow === "InfoUp2" && <MyPageInfoUp2 />}

                    </div>

                </div>
            </div>
        </>
    );
}

export default MyPage;