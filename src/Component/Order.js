import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDaumPostcodePopup } from "react-daum-postcode";
import axios from "axios";
import "../CSS/Order.css";
function Order() {
    const memIdx = sessionStorage.getItem("idx");
    const memEmail = sessionStorage.getItem("email");
    const location = useLocation([]);
    const item = location.state.orderDto;
    const navigate = useNavigate();
    let totalPrice = 0;
    var date = new Date();
    var components = [
        date.getYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
    var id = components.join("");
    item.forEach((items) => {
        totalPrice += (items.itemPrice * items.itemAmount);
    });
    const [data, setData] = useState([])
    const [checkType, setCheckType] = useState('');
    const [postCode, setPostCode] = useState("");
    const [addr1, setAddr1] = useState("");
    const [addr2, setAddr2] = useState("");
    const [postCodeError, setPostCodeError] = useState(true);
    const [addr1Error, setAddr1Error] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const handlerChangeAddr2 = (e) => setAddr2(e.target.value);
    const handlerChangeName = (e) => setName(e.target.value);
    const handlerChangePhoneNum = (e) => setPhoneNum(e.target.value.replace(/[^0-9]/g, "")); 


    const open = useDaumPostcodePopup(
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    );

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let postCode = data.zonecode;
        let extraAddress = "";
        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setAddr1(fullAddress);
        setPostCode(postCode);
        setPostCodeError(false);
        setAddr1Error(false);
    };

    
    const handleOpenSearchAddress = () => {
        open({ onComplete: handleComplete });
    };
   
    useEffect(() => {
        axios.get(`http://localhost:8080/member/${memEmail}`)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => { console.log(error); });
    }, []);
    const orderInfo = item.map(order => ({
        memEmail: data.memEmail,
        memIdx : memIdx,
        address1: addr1,
        address2: addr2,
        address3: postCode,
        memPhone: phoneNum,
        itemPrice: order.itemPrice,
        itemNum: order.itemNum,
        itemName: order.itemName,
        itemAmount: order.itemAmount,
        orderNum: id,
        cartIdx : order.cartIdx,
        itemThumb : order.itemThumb,
        recipient : name,
        recipientPhone : phoneNum
    }))


    console.log(orderInfo);
    const handlerClickSubmit = (e) => {
        e.preventDefault();
        console.log(addr1);
        console.log(addr2);
        console.log(phoneNum);
        if (checkType === 'new') {
            axios.post("http://localhost:8080/order/insert", orderInfo)
                .then(response => {
                    console.log(response);
                })
                .catch(error => { console.log(error); })
            navigate("/mypage");
        } else {
            axios.post("http://localhost:8080/order/insert", orderInfo)
                .then(response => {
                    console.log(response);
                })
                .catch(error => { console.log(error); })
                navigate("/mypage/myorderlist/", {memIdx : {memIdx}})
                window.location.reload();
        }

    }
    const checkedSame = () => {
        setCheckType('same');
        console.log(checkType)
    }
    const checkedNew = (e) => {
        setCheckType('new');
        console.log(checkType);
    }
    return (
        <>
            <div className="order_conatiner">
                <div className="order_contents">
                    <div className="order_content_box">
                        <form className="order_form">
                            <div className="order_wrap">
                                <div className="order_title">
                                    <h2>주문서 작성/결제</h2>
                                </div>
                                <div className="order_cont">
                                    <div className="order_cont_list">
                                        <div className="order_cont_title">
                                            <h3>주문상세내역</h3>
                                        </div>
                                        <div className="order_table">
                                            <table>
                                                <thead>
                                                    <th>상품 / 옵션 정보</th>
                                                    <th>수량</th>
                                                    <th>상품금액</th>
                                                    <th>배송비</th>
                                                    <th>합계금액</th>
                                                </thead>
                                                <tbody>
                                                    {item.map(items => [
                                                        <tr>
                                                            <td className="order_td_item">
                                                                <div className="order_item">
                                                                    <span className="order_item_img"><img src={process.env.REACT_APP_API_URL + items.itemThumb} /></span>
                                                                    <div className="order_item_info">
                                                                        <a>{items.itemName}</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="order_td_amount">
                                                                <div className="order_amount">
                                                                    <strong>{items.itemAmount}</strong>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <strong className="order_item_price">{items.itemPrice}</strong>
                                                            </td>
                                                            <td><span>2500원</span></td>
                                                            <td>
                                                                <strong className="order_item_totalprice">
                                                                    {items.itemPrice * items.itemAmount}
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    ])}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="order_price_sum">
                                        <div className="order_sum_cont">
                                            <div className="order_sum_list">
                                                <dl>
                                                    <dt>총 <strong></strong> {item.length}개의 상품금액 </dt>
                                                    <dd><strong>{totalPrice}</strong>원</dd>
                                                </dl>
                                                <span><img src="/images/order_price_plus.png" alt="더하기" /></span>
                                                <dl>
                                                    <dt>배송비</dt>
                                                    <dd><strong>2500</strong>원</dd>
                                                </dl>
                                                <span><img src="/images/order_price_total.png" alt="합계" /></span>
                                                <dl class="price_total">
                                                    <dt>합계</dt>
                                                    <dd><strong>{totalPrice + 2500}</strong>원
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order_view_info">
                                        <div class="order_info">
                                            <div class="order_zone_tit">
                                                <h4>주문자 정보</h4>
                                            </div>
                                            <div class="order_table_type">
                                                <table class="table_left">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><span class="important">주문하시는 분</span></th>
                                                            <td><input type="text" name="orderName" maxlength="20" value={data.memName} /></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="important">휴대폰 번호</span></th>
                                                            <td>
                                                                <input type="text" id="mobileNum" name="orderCellPhone" value={data.memPhone} maxlength="20" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="important">이메일</span></th>
                                                            <td class="member_email">
                                                                <input type="text" name="orderEmail" value={data.memEmail} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="delivery_info">
                                        <div class="order_zone_tit">
                                            <h4>배송정보</h4>
                                        </div>
                                        <div class="order_table_type shipping_info">
                                            <table class="table_left shipping_info_table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">배송지 확인</th>
                                                        <td>
                                                            <div class="form_element">
                                                                <ul>
                                                                    <li>
                                                                        <input type="radio" name="shipping" id="New" defaultChecked={true} onClick={checkedNew} />
                                                                        <label for="shippingNew" class="choice_s on">직접 입력</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="radio" name="shipping" id="SameCheck" onClick={checkedSame} />
                                                                        <label for="shippingSameCheck" class="choice_s" >주문자정보와 동일</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    { }
                                                    <tr>
                                                        <th scope="row"><span class="important">받으실분</span></th>
                                                        <td>
                                                            {/* {checkType === 'same' ? <input type="text" name="receiverName" value={data.memName} /> :
                                                                <input type="text" name="receiverName" />} */}

                                                                <input type="name" onChange={handlerChangeName} placeholder="이름을 입력하세요" value={checkType === 'same' ? data.memName : name} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span class="important">받으실 곳</span></th>
                                                        <td class="member_address">
                                                            <div class="address_postcode">
                                                                <input type="text" name="receiverZonecode" readonly="readonly" value={checkType === 'same' ? data.memPostNum : postCode} />
                                                                <input type="hidden" name="receiverZipcode" />
                                                                <span id="receiverZipcodeText" class="old_post_code"></span>
                                                                <button type="button" className="btn_post_search" onClick={handleOpenSearchAddress}>우편번호검색</button>
                                                            </div>
                                                            <div class="address_input">
                                                                <input type="text" placeholder="주소를 입력하세요" name="address" readonly="readonly" value={checkType === 'same' ? data.memAddr1 : addr1} />
                                                                <input type="text" placeholder="상세주소를 입력하세요" onChange={handlerChangeAddr2} name="addressDetail" value={checkType === 'same' ? data.memAddr2 : addr2} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span class="important">휴대폰 번호</span></th>
                                                        <td>
                                                            <input type="text" id="receiverCellPhone" onChange={handlerChangePhoneNum} name="receiverCellPhone" value={checkType === 'same' ? data.memPhone : phoneNum} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="payment_info">
                                        <div class="order_zone_tit">
                                            <h4>결제정보</h4>
                                        </div>
                                        <div class="order_table_type">
                                            <table class="table_left">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">상품 합계 금액</th>
                                                        <td>
                                                            <strong id="totalGoodsPrice" class="order_payment_sum">{totalPrice}</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">배송비</th>
                                                        <td>
                                                            <span id="totalDeliveryCharge">2500</span>원
                                                            <span class="multi_shipping_text"></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">최종 결제 금액</th>
                                                        <td>
                                                            <input type="hidden" name="settlePrice" value="55800" />
                                                            <input type="hidden" name="overseasSettlePrice" value="0" />
                                                            <input type="hidden" name="overseasSettleCurrency" value="KRW" />
                                                            <strong id="totalSettlePrice" class="order_payment_sum">{totalPrice + 2500}</strong>원
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="payment_progress">
                                        <div class="order_zone_tit">
                                            <h4>결제수단 선택 / 결제</h4>
                                            <p class="js_pay_content">※ 고객님은 안전거래를 위해 현금으로 결제시 저희 쇼핑몰에서 가입한 구매안전서비스인 나이스페이의 구매안전(에스크로)서비스를 이용하실 수 있습니다.</p>
                                        </div>
                                        <div class="payment_progress_list">
                                            <div class="js_pay_content">
                                                <div id="settlekind_general" class="general_payment">
                                                    <dl>
                                                        <dt>일반결제</dt>
                                                        <dd>
                                                            <div class="form_element">
                                                                <ul class="payment_progress_select">
                                                                    <li id="settlekindType_pk">
                                                                        <input type="radio" id="settleKind_pk" name="settleKind" value="pk" defaultChecked={true} />
                                                                        <label for="settleKind_pk" class="choice_s">카카오페이<img src="/images/kakaopay-PC.png" /></label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="card" id="settlekind_general_pc" ></div>
                                                            <div class="account-bank" id="settlekind_general_pb" ></div>
                                                            <div class="virtual-bank" id="settlekind_general_pv"></div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment_final">
                                            <div class="payment_final_total">
                                                <dl>
                                                    <dt>최종 결제 금액</dt>
                                                    <dd><span><strong id="totalSettlePriceView">{totalPrice + 2500}</strong>원</span></dd>
                                                </dl>
                                            </div>
                                            <div class="payment_final_check">
                                                <div class="form_element">
                                                    <input type="checkbox" id="termAgree_orderCheck" class="require" />
                                                    <label for="termAgree_orderCheck" class="check_s"><em><b>(필수)</b> 구매하실 상품의 결제정보를 확인하였으며, 구매진행에 동의합니다.</em></label>
                                                </div>
                                            </div>
                                            <div class="btn_center_box">
                                                <button onClick={handlerClickSubmit} class="btn_order_buy order-buy"><em>결제하기</em></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Order;