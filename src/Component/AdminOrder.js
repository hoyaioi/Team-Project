import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/AdminOrder.css";


function AdminOrder() {

    const [datas, setDatas] = useState([]);
    const orderState = ["배송준비중", "배송중", "배송완료"];
    const [stateSelect, setStateSelect] = useState("선택");
    const stateHandler = (e) => {
        setStateSelect(e.target.value);
        console.log(stateSelect);
    }


    useEffect(() => {
        axios
            .get("http://localhost:8080/admin/order")
            .then((response) => {
                console.log(response);
                setDatas(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div className="adminorder_list">
                <div className="adminorder_header"><strong>관리자 주문목록</strong></div>
                <table className="admin_order_table">
                    <thead >
                        <tr>
                            <th width="16%">상품이미지</th>
                            <th width="16%">주문번호</th>
                            <th width="30%">상품이름</th>
                            <th width="10%">주문자</th>
                            <th width="11%">주문일자</th>
                            <th width="17%">주문상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map(orderlist => (
                            
                            <tr>
                                <td className="admin_img" width="16%"><img className="adminorder_img" src={process.env.REACT_APP_API_URL + orderlist.itemThumb} /></td>
                                <td width="16%">{orderlist.orderNum}</td>
                                <td width="30%">{orderlist.itemName}</td>
                                <td width="10%">{orderlist.memIdx}</td>
                                <td width="11%">{orderlist.orderDate}</td>
                                <td width="17%">
                                    {orderlist.orderStatus}
                                    <select name="categoryName" onChange={stateHandler} value={stateSelect}>
                                        {orderState.map((state) => (
                                            <option
                                                value={state}
                                                key={state}
                                            >
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>

    );
}

export default AdminOrder;