import '../CSS/MyCart.css';
import { useState } from "react";
import s3 from '../Img/s3.jpg';
import Paging from './Paging';

function MyCart() {

    //메인페이지 > 아이템디테일에서 장바구니로 담았을 때 data 배열에 해당 아이템 객체를 추가하는 작업 필요
    const data = [
        {
            id: 0
        }
    ]


    const [checkItems, setCheckItems] = useState([]);
    //체크박스 하나 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    //전체 선택
    const handleAllCheck = (checked) => {
        if (checked) {
            const idArray = [];
            data.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    }

    return (
        <>
            <div id='main'>
                <div className='mycart_wrap'>
                    <div className='mycart_title_wrap'>
                        <h2>장바구니</h2>
                    </div>
                    <div className='mycart_list_wrap'>
                        <table>
                            <thead>
                                <tr>
                                    <td className='mycart_check_all_td'>
                                                <input type="checkbox" onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === data.length ? true : false} />

                                    </td>
                                    <td>제품정보</td>
                                    <td>수량</td>
                                    <td>금액</td>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((data, key) => (
                                <tr key={key}>
                                    <td>
                                        <div className='mycart_check'>
                                        <input type="checkbox" onChange={(e) => handleSingleCheck(e.target.checked, data.id)} checked={checkItems.includes(data.id) ? true : false} />
                                        </div>
                                    </td>
                                    <td className='mycart_item_info_td'>
                                        <div className='mycart_item_info_wrap'>
                                            <img src={s3} className='mycart_item_img' />
                                            <div className='mycart_item_name'>
                                                고려은단 비타민C 1000 이지 + 비타민 D ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                                            </div>
                                        </div>
                                    </td>
                                    <td className='mycart_item_count_td'>
                                        200
                                    </td>
                                    <td className='mycart_item_price_td'>
                                        38,900원
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                    
                    {/* <h1>장바구니</h1>
                    <div className='mycart_check_all_wrap'>
                        <div className='mycart_check'>
                            <input type="checkbox" onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === data.length ? true : false} />
                        </div>
                        <div className='mycart_check_all_text'>
                            전체 선택
                        </div>
                    </div>
                    <div className='mycart_item_list'>
                        <ul>
                            {data.map((data, key) => (
                                <li key={key}>
                                    <div className='mycart_check'>
                                        <input type="checkbox" onChange={(e) => handleSingleCheck(e.target.checked, data.id)} checked={checkItems.includes(data.id) ? true : false} />
                                    </div>
                                    
                                    <div className='mycart_item_img_wrap'>
                                        <img src={s3} className='mycart_item_img' />
                                    </div>
                                    <div className='mycart_item_name'>
                                        ㅇㅇㅇㅇㅇ
                                    </div>
                                    <div className='mycart_item_count'>
                                        수량 ㅇㅇㅇ
                                    </div>
                                    <div className='mycart_item_price'>
                                        가격 ㅇㅇㅇ
                                    </div>
                                    
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className='mycart_btn_wrap'>
                        <div className='mycart_btn_wrap_inner'>
                            <button className='mycart_delete_btn' type='button'>선택 항목 삭제</button>
                            <button className='mycart_buy_btn' type='button'>구매하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCart;