import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Items = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/item')
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="main_items_sales">
      {datas.filter(item => item.itemCount >= 10).slice(0, 5).map((item, idx) => (
        <Link to={`/item/${item.itemNum}`} state={{ item: datas }}>
          <div key={idx} className="main_items">
            <div className="main_items_img_wrap">
              <img src={process.env.REACT_APP_API_URL + item.itemThumb} alt="상품썸네일" />
            </div>
            <div className="main_items_name">{item.itemName}</div>
            <div className="main_items_price">{item.itemPrice}원</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
