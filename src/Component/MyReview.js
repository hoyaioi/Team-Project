import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/MyReview.css';
import reviewWriteList from '../Img/s1.jpg';
import s2 from '../Img/s2.jpg';
import ReviewWrite from './ReviewWrite.js';
import s3 from '../Img/s3.jpg';
import { useEffect } from 'react';
import axios from 'axios';


function MyReview({memIdx}) {

    const [datas, setDatas] = useState([]);

    const [btnActive, setBtnActive] = useState([true, false]);

    const [open, setOpen] = useState(false);

    const handlerOpen = () => {
            setOpen(true);
    }

    const handlerClose = () => {
        if(window.confirm('작성을 취소하시겠습니까?')){
            setOpen(false);
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/mypage/myreview/${memIdx}`)
        .then(response => {
            setDatas(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <>
            <div id='main'>
                <div className="myreview_wrap">
                    <div className='myreview_title_wrap'>
                        <h2>나의리뷰</h2>
                    </div>
                    <div className='myreview_notice'>
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
                    {open ? <ReviewWrite handlerClose={handlerClose}/> : 
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
                                            {datas.map(review => (
                                            <li key={review.reviewIdx}>
                                                <div className='myreview_img_wrap'>
                                                    <img className='myreview_img' src={s2} />
                                                </div>
                                                <div className='myreview_item_name'>
                                                    {review.itemNum}
                                                </div>
                                                <div>
                                                    주문일자 : &nbsp;
                                                    {review.orderDate}
                                                </div>
                                                <div className='myreview_btn_box'>
                                                    <button type='button' className='myreview_write_btn' onClick={handlerOpen}>작성</button>
                                                </div>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                    : <div className='myreview_able_wrap'>
                                        <ul>
                                            <li key={100}>
                                                <div className='myreview_img_wrap'>
                                                    <img className='myreview_img' src={s3} />
                                                </div>
                                                <div>
                                                    작성일자
                                                </div>
                                                <div>
                                                    리뷰내용
                                                </div>
                                                <div className='myreview_btn_box'>
                                                    <button type='button' className='myreview_update_btn'>수정</button><br />
                                                    <button type='button' className='myreview_delete_btn'>삭제</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

export default MyReview;