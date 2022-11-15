import { useLocation } from "react-router-dom";
import "../CSS/Order.css";


function Order() {
const location = useLocation();
const item = location.state.item;
const amount = location.state.amount;
    console.log()
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
                                                    <tr>
                                                        <td className="order_td_item">
                                                            <div className="order_item">
                                                                <span className="order_item_img">이미지</span>
                                                                <div className="order_item_info">
                                                                    <a>{item.itemName}</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="order_td_amount">
                                                            <div className="order_amount">
                                                                <strong>{amount}</strong>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <strong className="order_item_price">{item.itemPrice*amount}원</strong>
                                                        </td>
                                                        <td><span>2500원</span></td>
                                                        <td>
                                                            <strong className="order_item_totalprice">
                                                                합계금액
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="order_price_sum">
                                        <div className="order_sum_cont">
                                            <div className="order_sum_list">
                                                <dl>
                                                    <dt>총 <strong>{amount}</strong> 개의 상품금액 </dt>
                                                    <dd><strong>56,000</strong>원</dd>
                                                </dl>
                                                <span><img src="https://grsmaltr7850.cdn-nhncommerce.com/data/skin/front/udweb/img/order/order_price_plus.png" alt="더하기" /></span>
                                                <dl>
                                                    <dt>배송비</dt>
                                                    <dd><strong>2500</strong>원</dd>
                                                </dl>
                                                <span><img src="https://grsmaltr7850.cdn-nhncommerce.com/data/skin/front/udweb/img/order/order_price_total.png" alt="합계" /></span>
                                                <dl class="price_total">
                                                    <dt>합계</dt>
                                                    <dd><strong>55,800</strong>원
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
                                                            <td><input type="text" name="orderName" maxlength="20" /></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">전화번호</th>
                                                            <td>
                                                                <input type="text" id="phoneNum" name="orderPhone" value="" maxlength="20" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="important">휴대폰 번호</span></th>
                                                            <td>
                                                                <input type="text" id="mobileNum" name="orderCellPhone" maxlength="20" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="important">이메일</span></th>
                                                            <td class="member_email">
                                                                <input type="text" name="orderEmail" value="" />

                                                                <select id="emailDomain" class="chosen-select">
                                                                    <option value="self">직접입력</option>
                                                                    <option value="naver.com">naver.com</option>
                                                                    <option value="hanmail.net">hanmail.net</option>
                                                                    <option value="daum.net">daum.net</option>
                                                                    <option value="nate.com">nate.com</option>
                                                                    <option value="hotmail.com">hotmail.com</option>
                                                                    <option value="gmail.com">gmail.com</option>
                                                                    <option value="icloud.com">icloud.com</option>
                                                                </select>
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
                                                                        <input type="radio" name="shipping" id="shippingBasic" />
                                                                        <label for="shippingBasic" class="choice_s">기본 배송지</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="radio" name="shipping" id="shippingRecently" />
                                                                        <label for="shippingRecently" class="choice_s">최근 배송지</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="radio" name="shipping" id="shippingNew" />
                                                                        <label for="shippingNew" class="choice_s on">직접 입력</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="radio" name="shipping" id="shippingSameCheck" />
                                                                        <label for="shippingSameCheck" class="choice_s">주문자정보와 동일</label>
                                                                    </li>
                                                                </ul>
                                                                <span class="btn_gray_list"><a href="#myShippingListLayer" class="btn_gray_small btn_open_layer js_shipping"><span>배송지 관리</span></a></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span class="important">받으실분</span></th>
                                                        <td><input type="text" name="receiverName" data-pattern="gdEngKor" maxlength="20" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span class="important">받으실 곳</span></th>
                                                        <td class="member_address">
                                                            <div class="address_postcode">
                                                                <input type="text" name="receiverZonecode" readonly="readonly" />
                                                                <input type="hidden" name="receiverZipcode" />
                                                                <span id="receiverZipcodeText" class="old_post_code"></span>
                                                                <button type="button" class="btn_post_search" onclick="gd_postcode_search('receiverZonecode', 'receiverAddress', 'receiverZipcode');">우편번호검색</button>
                                                            </div>
                                                            <div class="address_input">
                                                                <input type="text" name="receiverAddress" readonly="readonly" />
                                                                <input type="text" name="receiverAddressSub" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">전화번호</th>
                                                        <td>
                                                            <input type="text" id="receiverPhone" name="receiverPhone" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span class="important">휴대폰 번호</span></th>
                                                        <td>
                                                            <input type="text" id="receiverCellPhone" name="receiverCellPhone" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">남기실 말씀</th>
                                                        <td class="td_last_say"><input type="text" name="orderMemo" /></td>
                                                    </tr>
                                                    <tr id="memberinfoApplyTr">
                                                        <th scope="row">회원정보 반영</th>
                                                        <td>
                                                            <div class="form_element">
                                                                <div id="memberinfoApplyTr1" class="member_info_delivery">
                                                                    <input type="checkbox" id="reflectApplyDelivery" name="reflectApplyDelivery" value="y" />
                                                                    <label for="reflectApplyDelivery" class="check_s"><em>나의 배송지에 추가합니다.</em></label>
                                                                </div>
                                                                <div id="memberinfoApplyTr2" class="member_info_apply">
                                                                    <input type="checkbox" id="reflectApplyMember" name="reflectApplyMember" value="y" />
                                                                    <label for="reflectApplyMember" class="check_s">위 내용을 회원정보에 반영합니다. <span>(주소/전화번호/휴대폰번호)</span></label>
                                                                </div>
                                                            </div>
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
                                                            <strong id="totalGoodsPrice" class="order_payment_sum">56,000원</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">배송비</th>
                                                        <td>
                                                            <span id="totalDeliveryCharge">0</span>원
                                                            <span class="multi_shipping_text"></span>
                                                        </td>
                                                    </tr>
                                                    <tr id="rowDeliverAreaCharge" class="dn">
                                                        <th scope="row">지역별 배송비</th>
                                                        <td>
                                                            <span id="deliveryAreaCharge">0</span>원
                                                            <input type="hidden" name="totalDeliveryCharge" value="0" />
                                                            <input type="hidden" name="deliveryAreaCharge" value="0" />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">최종 결제 금액</th>
                                                        <td>
                                                            <input type="hidden" name="settlePrice" value="55800" />
                                                            <input type="hidden" name="overseasSettlePrice" value="0" />
                                                            <input type="hidden" name="overseasSettleCurrency" value="KRW" />
                                                            <strong id="totalSettlePrice" class="order_payment_sum">55,800</strong>원

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
                                                        <input type="radio" id="settleKind_pk" name="settleKind" value="pk" />
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
                                    <dd><span><strong id="totalSettlePriceView">55,800</strong>원</span></dd>
                                </dl>

                            </div>
                            <div class="payment_final_check">
                                <div class="form_element">
                                    <input type="checkbox" id="termAgree_orderCheck" class="require" />
                                    <label for="termAgree_orderCheck" class="check_s"><em><b>(필수)</b> 구매하실 상품의 결제정보를 확인하였으며, 구매진행에 동의합니다.</em></label>
                                </div>
                            </div>
                            <div class="btn_center_box">
                                <button class="btn_order_buy order-buy"><em>결제하기</em></button>
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