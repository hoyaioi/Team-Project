import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/AdminItem.css";


function AdminItem() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/admin/item" ,{ 
                headers: { 
                'Authorization': `Bearer ${sessionStorage.getItem("token")}` 
              }
            })
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handlerDelete = (itemNum) => {
        axios.post(`http://localhost:8080/admin/item/delete/${itemNum}`, { 
            headers: { 
            'Authorization': `Bearer ${sessionStorage.getItem("token")}` 
          }
        })
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("삭제 완료되었습니다.");
                window.location.reload();
              } else {
                alert("삭제 실패하였습니다.");
              }
        })
        .catch((error)=> console.log(error))
    }

    const handlerUpdate = () => {

    }

    return (
        <>
            <div className="adminorder_list">
                <div className="adminorder_header"><strong>관리자 상품목록</strong></div>
                <table className="admin_order_table">
                    <thead >
                        <tr>
                            <th width="16%">상품이미지</th>
                            <th width="16%">상품번호</th>
                            <th width="30%">상품이름</th>
                            <th width="10%">가격</th>
                            <th width="11%">등록일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                <td className="admin_img" width="16%"><img className="adminorder_img" src={process.env.REACT_APP_API_URL + item.itemThumb} /></td>
                                <td width="16%">{item.itemNum}</td>
                                <td width="30%">{item.itemName}</td>
                                <td width="10%">{item.itemPrice}</td>
                                <td width="11%">
                                    {item.itemCreatedAt} 
                                    <button onClick={handlerUpdate}>수정</button>
                                    <button onClick={()=>handlerDelete(item.itemNum)}>삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default AdminItem;