import "../CSS/Item.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import thumb from "../Img/1.jpg";
import detail from "../Img/2.JPG";
import moreDetail from "../Img/3.jpg";
import s1 from "../Img/s1.jpg";
import s2 from "../Img/s2.jpg";
import s3 from "../Img/s3.jpg";
import s4 from "../Img/s4.jpg";
import s6 from "../Img/s6.jpg";
import s7 from "../Img/s7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";
import Review from "./ItemReview.js";
import Qna from "./Qna";
import { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

SwiperCore.use([Navigation]);

function Item() {
  let { itemIdx } = useParams();
  let [reviwModal, setReviewModal] = useState(false);
  let [qnaModal, setQnaModal] = useState(false);
  const [datas, setData] = useState({});
  const [reviewDatas, setReviewDatas] = useState([]);
  const [qnaDatas, setQnaDatas] = useState([]);
  const [reviewIdx, setReviewIdx] = useState();
  const [qnaIdx, setQnaIdx] = useState();
  // const [ reviewDetail, setReviewDetail] = useState({});

  const location = useLocation();
  const items = location.state.item;
  console.log(items);

  const moveToFocus = useRef([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/item/${itemIdx}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/review")
      .then((response) => {
        console.log(response);
        setReviewDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/qna")
      .then((response) => {
        console.log(response);
        setQnaDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-content">
      <div className="item_detail">
        <div className="itemImg">
          <img className="thumb" src={datas.itemThumb} />
        </div>
        <div className="info">
          <div className="item_title">
            <strong>{datas.itemName}</strong>
            {/* <div className='item_share'> */}
            <button className="share_button"></button>
            {/* </div> */}
          </div>
          <div className="item_price">
            <span>상품가격</span>
            <strong>{datas.itemPrice}</strong>
            <span>원</span>
          </div>
          <div className="item_delivery">
            <span>배송비: </span>
            <span>2500원</span>
          </div>
          <div className="total-price">
            <span>{datas.itemName}</span>
            <input value={1} className="item_amount"></input>
            <div className="updown">
              <button className="arrow">
                <IoIosArrowUp />
              </button>
              <button className="arrow">
                <IoIosArrowDown />
              </button>
            </div>
          </div>
          <div className="last-price">
            <span>총합계</span>
            <div>
              <strong>{datas.itemPrice}</strong>
              <span>원</span>
            </div>
          </div>
          <div className="buy-section">
            <button className="cart-btn">장바구니</button>
            <button className="buy-btn">구매하기</button>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <strong>추천상품</strong>
        <div className="slide-btn">
          <button className="button-prev">
            <IoMdArrowDropleft />
          </button>
          <button className="button-next">
            <IoMdArrowDropright />
          </button>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          className="mySwiper"
        >
          {items.slice(0, 10).map((item) => (
            <SwiperSlide>
              <div>
                <img src={item.itemThumb} />
                <strong>{item.itemName}</strong>
                <div>
                  <sapn>{item.itemPrice}</sapn>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide><div><img src={s2} /><strong>제품명</strong><div><sapn>가격</sapn></div></div></SwiperSlide>
                     <SwiperSlide><div><img src={s3} /><strong>제품명</strong><div><sapn>가격</sapn></div></div></SwiperSlide>
                     <SwiperSlide><div><img src={s4} /><strong>제품명</strong><div><sapn>가격</sapn></div></div></SwiperSlide>
                    <SwiperSlide><div><img src={s6} /><strong>제품명</strong><div><sapn>가격</sapn></div></div></SwiperSlide>
                     <SwiperSlide><div><img src={s7} /><strong>제품명</strong><div><sapn>가격</sapn></div></div></SwiperSlide>  */}
        </Swiper>
      </div>
      <div id="1" className="item-tab">
        <ul>
          <li ref={(el) => (moveToFocus.current[0] = el)} className="on">
            메뉴1
          </li>
          <li onClick={() => moveToFocus.current[1].scrollIntoView()}>메뉴2</li>
          <li onClick={() => moveToFocus.current[2].scrollIntoView()}>메뉴3</li>
          <li onClick={() => moveToFocus.current[3].scrollIntoView()}>메뉴4</li>
        </ul>
      </div>
      <div className="detail_img">
        <div className="detail_img_box">
          <img src={datas.itemDetailImg} />
        </div>
      </div>

      <div className="moreDetail">
        <img src={datas.itemDetailImg} />
      </div>

      <div id="2" className="item-tab">
        <ul>
          <li onClick={() => moveToFocus.current[0].scrollIntoView()}>메뉴1</li>
          <li ref={(el) => (moveToFocus.current[1] = el)} className="on">
            메뉴2
          </li>
          <li onClick={() => moveToFocus.current[2].scrollIntoView()}>메뉴3</li>
          <li onClick={() => moveToFocus.current[3].scrollIntoView()}>메뉴4</li>
        </ul>
      </div>
      <div className="refund">
        <strong>배송안내</strong>
        <div className="refund-notice">
          - 반품배송비: 3,000원(단, 무료로 받으신 경우에는 6,000원 부가)
        </div>
        <div className="refund-notice">
          - 상품 밀봉(겉 비닐 밀봉 포함) 또는 개봉(실링 제거 등)으로 상품 가치
          훼손 시에는 상품 청약철회 가능 기간 이내라도 반품이 불가능합니다.
        </div>
        <div className="refund-notice">
          - 제품 반품, 환불을 하실 경우 반드시 고객센터로 문의 후 진행하시길
          바랍니다.
        </div>
        <div className="refund-notice">
          - 고객센터와 연락 없이 무단으로 반품하신 경우나 주소 불분명, 연락 두절
          등의 사유로 인한 반송 시 왕복 택배비를 부담하셔야 하며, 제품에 이상이
          없을 경우 재발송 됩니다.
        </div>
        <div className="refund-notice">
          - 무료배송하여 제품을 수령하신 경우는 환불 시 배송비 포함된 금액으로
          환불되므로 배송비 또한 동봉하여 보내주셔야 합니다.
        </div>
        <br />
        <strong>환불안내</strong>
        <div className="refund-notice">
          - 상품 청약철회 가능 기간은 상품수령일로부터 7일 이내입니다.
        </div>
        <div className="refund-notice">
          - 상품을 취소할 경우, 환불은 "취소완료" 후 처리됩니다.
        </div>
        <div className="refund-notice">
          - 무통장 입금일 경우 취소완료 후 3~5일 이내 환불됩니다.
        </div>
        <div className="refund-notice">
          - 실시간 계좌이체, 카드결제일 경우 평일 3~7일 이내 승인취소 및 계좌
          환불됩니다.
        </div>
        <div className="refund-notice">
          - 또한, 환불 소요기한은 평일 기준으로, 토/일/공휴일은 제외됩니다.
        </div>
      </div>

      <div id="3" className="item-tab">
        <ul>
          <li onClick={() => moveToFocus.current[0].scrollIntoView()}>메뉴1</li>
          <li onClick={() => moveToFocus.current[1].scrollIntoView()}>메뉴2</li>
          <li ref={(el) => (moveToFocus.current[2] = el)} className="on">
            메뉴3
          </li>
          <li onClick={() => moveToFocus.current[3].scrollIntoView()}>메뉴4</li>
        </ul>
      </div>

      <div className="review">
        <strong>상품후기</strong>
        <table className="review-table">
          <thead className="review-thead">
            <tr>
              <th>별점</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
            </tr>
          </thead>
          {reviewDatas &&
            reviewDatas.map((review) => (
              <tbody>
                <tr
                  onClick={() => {
                    setReviewIdx(review.reviewIdx);
                  }}
                >
                  <td width="15%">{review.itemRate}</td>
                  <td
                    width="45%"
                    onClick={() => {
                      setReviewModal(!reviwModal);
                    }}
                  >
                    {review.reviewTitle}
                  </td>
                  <td width="20%">{review.memId}</td>
                  <td width="20%">{review.reviewWriteDate}</td>
                </tr>
                {reviwModal === true && reviewIdx === review.reviewIdx ? (
                  <Review value={review.reviewIdx} />
                ) : null}
              </tbody>
            ))}
        </table>
      </div>
      <div className="pagenation">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>

      <div id="4" className="item-tab">
        <ul>
          <li onClick={() => moveToFocus.current[0].scrollIntoView()}>메뉴1</li>
          <li onClick={() => moveToFocus.current[1].scrollIntoView()}>메뉴2</li>
          <li onClick={() => moveToFocus.current[2].scrollIntoView()}>메뉴3</li>
          <li ref={(el) => (moveToFocus.current[3] = el)} className="on">
            메뉴4
          </li>
        </ul>
      </div>
      <div className="qna">
        <strong>QNA</strong>
        <table className="review-table">
          <thead className="review-thead">
            <tr>
              <th width="5%">글번호</th>
              <th width="40%">제목</th>
              <th width="15%">작성자</th>
              <th width="15%">작성일자</th>
              <th width="15%">답변상태</th>
            </tr>
          </thead>
          {qnaDatas &&
            qnaDatas.map((qna) => (
              <tbody>
                <tr
                  onClick={() => {
                    setQnaIdx(qna.qnaIdx);
                  }}
                >
                  <td width="8%">{qna.qnaIdx}</td>
                  <td
                    width="53%"
                    onClick={() => {
                      setQnaModal(!qnaModal);
                    }}
                  >
                    {qna.qnaTitle}
                  </td>
                  <td width="13%">{qna.memId}</td>
                  <td width="13%">{qna.qnaWriteDate}</td>
                  <td width="13%">답변상태</td>
                </tr>
                {qnaModal === true && qnaIdx === qna.qnaIdx ? (
                  <Qna value={qna.qnaIdx} />
                ) : null}
              </tbody>
            ))}
        </table>
      </div>
      <div className="pagenation">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  );
}

export default Item;
