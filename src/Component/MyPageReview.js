import { useState } from 'react';
import '../CSS/MyPageReview.css';
import reviewBanner from '../Img/reviewbanner.jpg';
import reviewWriteList from '../Img/s1.jpg';
import myReviewImg from '../Img/s2.jpg';
import ReviewWrite from './ReviewWrite.js';


function MyPageReview() {

    const [btnActive, setBtnActive] = useState([true, false]);
    let [reviewWriteModal, setReviewWriteModal] = useState(false);
    return (
        <>
            <div className="myPageReview">
                <div className="myReviewTitle">
                    <h1>리뷰 관리</h1>
                    <img className='reviewBanner' src={reviewBanner} />
                    <h3>* 아래와 같이 리뷰와 관계없는 글은 관리자 확인 후, 노출제한 될 수 있습니다.</h3>
                    <span>1. 작성한 글은 개인의 의견이므로 게시된 내용에 대한 모든 책임은 작성자에게 있으며, 상품 배송, 교환, 취소 등에 관한 문의사항은 고객센터를 이용해 주시기 바랍니다.<br />
                        <br />
                        2. 모든 리뷰는 공개함을 원칙으로 하나 욕설이나 상업적 내용, 게시물의 성격에 맞지 않는 내용은 임의로 삭제될 수 있습니다.<br />
                        <br />
                        3. 리뷰에 허위의 사실을 유포하여 다른 회원 또는 제3자에게 피해를 줄 경우 법적인 책임이 따를 수 있으며, 이에 대한 책임은 글을 게시한 당사자에게 있으니 불이익 당하지 않도록 주의하시기 바랍니다.<br />
                        (예) 상품을 구매한 것처럼 허위 사실을 기재한 경우, 타 사이트를 고의적으로 홍보, 고의성을 가지고 상품을 폄하하는 경우 등<br />
                        <br />
                        4. 타인에 대한 욕설, 비방, 명예훼손, 불성실한 내용, 반복문자, 특정 효능에 있어 오해의 소지가 있는 내용 등 타인의 권리나 명예, 신용 기타 정당한 이익을 침해하는 내용의 경우 임의로 삭제될 수 있습니다.<br />
                        <br />
                        5. 개인정보보호와 관련한 피해를 방지하기 위해 주민번호, 전화번호, 이메일, 연락처 등의 내용의 기입은 삼가해 주시기 바라며, 제3자 노출을 방지하기 위해 임의 삭제될 수 있습니다.
                    </span>
                </div>
                <div className='reviewList'>
                    <button className={btnActive[0] ? "reviewListWrite-btn--active" : "reviewListWrite-btn"} onClick={() => {
                        setBtnActive([true, false]);
                    }} ><span>작성 가능한 리뷰</span></button>
                    <button className={btnActive[1] ? "reviewList-btn--active" : "reviewList-btn"} onClick={() => {
                        setBtnActive([false, true]);
                    }}><span>작성한 리뷰</span></button>
                </div>
                <div className='reviewList-content'>
                    {
                        btnActive[0] ?
                        <div>
                            <div className='reviewListWrite'>
                                <div className='reviewWriteList'>
                                    <img className='reviewWriteImg' src={reviewWriteList} />
                                </div>

                                <h2>제품명</h2>
                                <button onClick={() => {setReviewWriteModal(!reviewWriteModal)}} className='writeReview-btn'>리뷰작성하기</button>
                            </div>
                                {reviewWriteModal === true ? <ReviewWrite /> : null}
                                </div>
                            : <div className='reviewCompleList'>
                                <ul>
                                    <li className='myReviewList'>
                                        <div className='myReviewTitle'>
                                            <img className='myReviewImg' src={myReviewImg} />
                                            <span className='myReviewItemTitle'>리뷰 아이템 상품명</span>
                                            <span className='myReviewBtn'>
                                                <a className='myReviewModify-btn'>수정</a>
                                                <sapn className='delimiter'>|</sapn>
                                                <a className='myReviewDelete-btn'>삭제</a>
                                            </span>
                                        </div>
                                        <div className='myReviewMain'>
                                            <div className='myReviewMain-title'>
                                                <div className='myReviewMain-rating'>
                                                    <span>점수  </span>
                                                    <span>2022-10-27날짜</span>
                                                </div>
                                                <div className='myReivewMainContent'>
                                                    <div className='myReviewMain-content'>
                                                        <span>리뷰내용</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    }
                </div>

            </div>
        </>
    );
}

export default MyPageReview;