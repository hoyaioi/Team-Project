import { useState } from 'react';
import '../CSS/MyReview.css';
import reviewBanner from '../Img/reviewbanner.jpg';
import reviewWriteList from '../Img/s1.jpg';
import s2 from '../Img/s2.jpg';
import ReviewWrite from './ReviewWrite.js';
import s3 from '../Img/s3.jpg';


function MyReview() {

    const [btnActive, setBtnActive] = useState([true, false]);
    
    return (
        <>
            <div id='main'>
                <div className="myreview_wrap">
                    <div className="myreview_title_wrap">
                        나의 리뷰
                    </div>
                    <div className='myreview_notice'>
                        <div className='myreview_banner_wrap'>
                            <img className='myreview_banner' src={reviewBanner} />
                        </div>
                        <h3>* 리뷰 작성 시 아래 내용을 꼭 숙지해주세요. </h3>

                        <p>
                            1. 주문 건 관련 문의사항은 리뷰가 아닌, 고객센터를 이용해주세요!
                        </p>
                        <p>
                            2. 구매한 제품과 무관한 내용은 임의 삭제될 수 있습니다!
                        </p>
                        <p>
                            3. 욕설, 비방글, 성적인 수치심을 유발하는 내용 등 다른 사람이 보기에 기분나쁠 수 있는 글은 작성하지 말아주세요.
                        </p>
                        <p>
                            4. 주소, 주민번호, 연락처 등 개인정보 기입은 절대 안 돼요!
                        </p>

                    </div>
                    <div className='myreview_review_wrap'>
                        <div className='myreview_menu_wrap'>
                            <button className={btnActive[0] ? "myreview_able_btn_active" : "myreview_able_btn"} onClick={() => {
                                setBtnActive([true, false]);
                            }} >작성 가능한 리뷰</button>
                            <button className={btnActive[1] ? "myreview_did_btn_active" : "myreview_did_btn"} onClick={() => {
                                setBtnActive([false, true]);
                            }}>작성한 리뷰</button>
                        </div>
                        <div className='myreview_list_wrap'>
                            {
                                btnActive[0] ?
                                    <div className='myreview_able_wrap'>
                                        <ul>
                                            <li>
                                                <div className='myreview_img_wrap'>
                                                    <img className='myreview_img' src={s2} />
                                                </div>
                                                <div className='myreview_item_name'>
                                                    제품명ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                                                </div>
                                                <div>
                                                    <button type='button' className='myreview_write_btn'>작성하기</button>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    : <div className='myreview_able_wrap'>
                                    <ul>
                                        <li>
                                            <div className='myreview_img_wrap'>
                                                <img className='myreview_img' src={s3} />
                                            </div>
                                            <div className='myreview_item_name'>
                                                제품명ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                                            </div>
                                            <div>
                                                작성일자
                                            </div>
                                            <div>
                                                <button type='button' className='myreview_update_btn'>수정</button><br />
                                                <button type='button' className='myreview_delete_btn'>삭제</button>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyReview;