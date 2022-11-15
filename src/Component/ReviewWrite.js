import '../CSS/ReviewWrite.css';
import reviewBanner from '../Img/reviewbanner.jpg';
import reviewIcon from '../Img/reviewicon.png';
import s1 from '../Img/s1.jpg';
import { FaStar } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import styled from 'styled-components';

function ReviewWrite({handlerClose}) {

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

.yellowStar {
  color: #fcc419;
}
`;

    return (
        <>
            <div id='main'>
                <div className='reviewwrite_form_wrap'>

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
                                    <div className='reviewwrite_detail_title'>리뷰내용</div>
                                    <div className='reviewwrite_detail_cont'>
                                        <div className='reviewwrite_content_text'>
                                            <textarea className='reviewwrite_text' maxLength={300} placeholder='다른 소비자에게 도움이 되도록 솔직한 평가를 남겨주세요.' autoComplete='off' spellCheck='false'>

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
                            <button className='reviewwrite_del_btn' type='button' onClick={handlerClose}>취소하기</button>
                            <button className='reviewwrite_btn' type='button'>등록하기</button>
                        </div>
                    </div>
                </div>
            
        </>
    );
}

export default ReviewWrite;