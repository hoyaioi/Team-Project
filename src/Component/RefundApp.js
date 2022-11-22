import '../CSS/RefundApp.css';
import s1 from '../Img/s1.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function RefundApp({ orderNum, itemName, itemPrice, setOpenApp }) {

    const handlerCloseApp = () => {
        if (window.confirm('반품 신청을 취소하시겠습니까?')) {
            setOpenApp(false);
        }
    }

    const [option, setOption] = useState('');

    const selectList = [
        '마음에 안 들어요.',
        '다른 상품이 잘못 배송됐어요.',
        '상품에 이물질이 있어요.',
        '유통기한이 경과했어요.'
    ];

    const handlerSelect = (e) => {
        setOption(e.target.value);
    }

    const navigate = useNavigate();

    const handlerRefundGo = () => {
           
        
    }

    return (
        <>
            <div id='main'>
                <div className='refundapp_title_wrap'>
                    <h2>반품접수</h2>
                </div>
                <div className='myreview_notice'>
                        <p>
                            1. 현재 반품택배비는 무료 이벤트 진행 중입니다!
                        </p>
                        <p>
                            2. 반품신청 시 "반품/환불" 메뉴에서 진행상황 확인이 가능합니다.
                        </p>
                        <p>
                            3. 반품관련 상담이 필요하실 경우 "고객센터 {'>'} 1:1문의" 를 이용해주시길 바랍니다.
                        </p>
                    </div>
                <div className='refundapp_form_wrap'>
                            <div className='refundapp_info_wrap'>
                                <div className='refundapp_ordernum_wrap'>
                                    <div className='refundapp_text'>주문번호</div>
                                    <div className='refundapp_input_ordernum'>
                                    <input type='text' readOnly value={orderNum}/>
                                    </div>
                                </div>
                                <div className='refundapp_itemname_wrap'>
                                    <div className='refundapp_text'>제품명</div>
                                    <div className='refundapp_input_itemname'>
                                        <textarea readOnly value={itemName}>

                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='refundapp_id_wrap'>
                                <div className='refundapp_reason_wrap'>
                                    <div className='refundapp_text'>반품사유</div>
                                    <div className='refundapp_select_wrap'>
                                        <select placeholder='선택해주세요.' value={option} onChange={handlerSelect}>
                                            {selectList.map(reason => (
                                            <option value={reason} key={reason}>
                                                {reason}
                                            </option>
                                            ))}
                                        </select>
                                        {console.log(option)};
                                    </div>
                                </div>
                                <div className='refundapp_itemname_wrap'>
                                    <div className='refundapp_text'>환불금액</div>
                                    <div className='refundapp_input_price'>
                                        <textarea readOnly value={itemPrice}>

                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div className='refundapp_btn_box'>
                    <button className='refundapp_btn_cancel' type='button' onClick={handlerCloseApp}>취소</button>
                    <button className='refundapp_btn_refund' type='button' onClick={handlerRefundGo}>반품신청</button>
                </div>
            </div>


        </>
    );
}

export default RefundApp;