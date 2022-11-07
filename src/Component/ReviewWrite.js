import '../CSS/ReviewWrite.css';
import reviewBanner from '../Img/reviewbanner.jpg';
import reviewIcon from '../Img/reviewicon.png';
import s1 from '../Img/s1.jpg';
import { FaStar } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import styled from 'styled-components';

function ReviewWrite() {

    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const array = [0, 1, 2, 3, 4];

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
    clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
      };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

    const Stars = styled.div`
display: flex;
padding-top: 5px;

& svg {
  color: gray;
  cursor: pointer;
}

:hover svg {
  color: #fcc419;
}

& svg:hover ~ svg {
  color: gray;
}

.yellowStar {
  color: #fcc419;
}
`;

    return (
        <>
            <div id='main'>
                <div className='reviewwrite_title_wrap'>
                    <h2>나의리뷰</h2>
                </div>
                <div className='reviewwrite_notice'>
                    <div className='reviewwrite_banner_wrap'>
                        <img className='reviewwrite_banner' src={reviewBanner} />
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
                <div className='reviewwrite_form_wrap'>
                    <div className='reviewwrite_form_header'>
                        <div className='reviewwrite_form_title'>
                            <img src={reviewIcon} />
                            <span>상품 품질 리뷰</span>
                        </div>
                        <div className='reviewwrite_form_sub'>
                            <span>이 상품의 품질에 대해서 얼마나 만족하시나요?</span>
                        </div>
                    </div>
                    <div className='reviewwrite_form_rate'>
                        <div className='reviewwrite_table'>
                            <div className='reviewwrite_table_img'>
                                <img src={s1} />
                            </div>
                            <div className='reviewwrite_table_cell'>
                                <div className='reviewwrite_item_title'>
                                    상품명
                                </div>
                                <div className='reviewwrite_item_rate'>
                                    <div className='reviewwrite_modify_rate'>
                                        <Stars>
                                            {array.map((el, idx) => {
                                                return (
                                                    <FaStar
                                                        key={idx}
                                                        size="30"
                                                        onClick={() => handleStarClick(el)}
                                                        className={clicked[el] && 'yellowStar'}
                                                    />
                                                );
                                            })}
                                        </Stars>
                                    </div>
                                </div> 
                            </div>
                        </div>
                            <div className='reviewwrite_detail'>
                                <div className='reviewwrite_detail_form'>
                                    <div className='reviewwrite_detail_title'>상세리뷰</div>
                                    <div className='reviewwrite_detail_cont'>
                                        <div className='reviewwrite_content_text'>
                                            <textarea className='reviewwrite_text' placeholder='다른 고객님에게 도움이 되도록 상품에 대한 솔직한 평가를 남겨주세요.'>

                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='reviewwrite_detail_file'>
                                        <div className='reviewwrite_file_title'>
                                            사진첨부
                                        </div>
                                        <div className='reviewwrite_file_box'>
                                            <input type='file'/>
                                        </div>
                                </div>
                            </div>

                            <div className='reviewwrite_btn_box'>
                            <button className='reviewwrite_btn' type='button'>등록하기</button>
                            <button className='reviewwrite_del_btn' type='button'>취소하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewWrite;