import "../CSS/MyPage.css";
import { useState } from "react";
import MyOrderList from "./MyOrderList";
import MyCart from "./MyCart";
import MyRefund from "./MyRefund";
import MyReview from "./MyReview";
import MyInfoUp1 from "./MyInfoUp1";
import MyInfoUp2 from "./MyInfoUp2";
import MyInfoDel1 from "./MyInfoDel1";
import MyResearch from "./MyResearch";
import ReviewWrite from "./ReviewWrite";
import MyPageResearchDetail from "./MyResearchDetail";

function MyPage({ memIdx }) {
  const [isNow, setIsNow] = useState("MyOrderList");

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
  };

  return (
    <>
      <div id="main">
        <div className="mypage_main_wrap">
          <div className="mypage_side">
            <div className="mypage_side_in">
              <div className="mypage_profile_wrap">
                <div>Welcome!</div>
                <span>이름</span> 님
              </div>
              <div className="mypage_sidemenu">
                <ul>
                  <li>
                    <div id="MyOrderList" onClick={handleIsNow}>
                      주문 현황
                    </div>
                  </li>
                  <li>
                    <div id="MyRefund" onClick={handleIsNow}>
                      반품/환불
                    </div>
                  </li>
                  <li>
                    <div id="MyCart" onClick={handleIsNow}>
                      장바구니
                    </div>
                  </li>
                  <li>
                    <div id="MyReview" onClick={handleIsNow}>
                      나의 리뷰
                    </div>
                  </li>
                  <li>
                    <div id="MyResearch" onClick={handleIsNow}>
                      나의 설문
                    </div>
                  </li>
                  <li>
                    <div id="MyInfoUp1" onClick={handleIsNow}>
                      회원정보 수정
                    </div>
                  </li>
                  <li>
                    <div id="MyInfoDel1" onClick={handleIsNow}>
                      회원탈퇴
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my_component">
            {isNow === "MyOrderList" &&<MyOrderList />}
            {isNow === "MyCart" && <MyCart />}
            {isNow === "MyRefund" && <MyRefund />}
            {isNow === "MyReview" && <MyReview handleIsNow={handleIsNow}/>}
            {isNow === "MyInfoUp1" && <MyInfoUp1 handleIsNow={handleIsNow} />}
            {isNow === "MyInfoUp2" && <MyInfoUp2 memIdx={5}/>}
            {isNow === "MyPageResearchDetail" && <MyPageResearchDetail />}
            {isNow === "MyInfoDel1" && <MyInfoDel1 />}
            {isNow === "MyResearch" && <MyResearch  handleIsNow={handleIsNow} />}
            {isNow === "ReviewWrite" && <ReviewWrite />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPage;
