import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/ItemList.css";

function ItemList() {

  const location = useLocation();
  const categoryName = location.state.category;
  const [datas, setDatas] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsOrgans, setItemsOrgans] = useState([]);
  const organsList = ["간", "눈", "몸", "혈관", "장"];
  const [organs, setOrgans] = useState('');
  
  
  const organsClick = (e) => {
    
    setOrgans(e.target.value);
  };


  useEffect(() => {
    axios
      .get("http://localhost:8080/item")
      .then((response) => {
        console.log(response);
        setDatas(response.data);
      })
      .catch((error) => console.log(error));
  },[organs]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/itemlist/${categoryName}`)
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  },[categoryName]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/itemOrgans/${organs}`)
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  },[organs]);




const itemCount =  categoryName === null ? datas : items;
  return (
    <>
      <div className="itemlist_container">
        <div className="itemlist_contents">
          <div className="itemlist_main">
            <div className="itemlist_title">
              {categoryName === null ? <h2>전체상품</h2> : 
              <>
              <h2>{categoryName}</h2>
              {categoryName === '기능별' ? organsList.map(organs => (
                <button onClick={organsClick} value={organs}>{organs}</button>
              ))
            : null}
              
              </>
              }
            </div>
            <div className="itemlist_box">
              <div className="itemlist_inbox">
                <span className="itemlist_num">
                  <strong>{itemCount.length}개의 상품</strong>
                </span>
                <div className="itemlist_view_num">
                  <select name="sort" className="itemlist_chosen">
                    <option value="selected" selected="selected">
                      추천상품순
                    </option>
                    <option value="sellcnt">판매인기순</option>
                    <option value="price_asc">낮은가격순</option>
                    <option value="price_dsc">높은가격순</option>
                  </select>
                </div>
                <div className="itemlist_view_num">
                  <select name="page_num" className="itemlist_chosen">
                    <option value="10">10개씩보기</option>
                    <option value="20" selected="selected">
                      20개씩보기
                    </option>
                    <option value="30">30개씩보기</option>
                    <option value="40">40개씩보기</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="main_items_sales">
              {dummy.topitem.map((item, id) => (
                <Link to="/item">
                  <div key={id} className="main_items">
                    <div className="main_items_img_wrap">
                      <img src={item.img} />
                    </div>
                    <div className="main_items_name">{item.title}</div>
                    <div className="main_items_price">{item.price}</div>
                  </div>
                </Link>
              ))}
            </div> */}
            <div className="itemlist_items">
              <div className="itemlist_items_cont">
                  {categoryName === null 
                  ? <ul>
                  {datas.map(item => {
                      return <Link to={`/item/${item.itemNum}`} state={{ item: datas}}>
                        <li key={item.itemNum}>
                          <div className="itemlist_items_box">
                            <div className="itemlist_items_img">
                              <img src={process.env.REACT_APP_API_URL +item.itemThumb} />
                            </div>
                          </div>
                          <div className="itemlist_info">
                            <div className="itemlist_info_title">
                              <strong>{item.itemName}</strong>
                            </div>
                            <div className="itemlist_info_money">
                              <strong>{item.itemPrice}</strong>
                            </div>
                          </div>
                        </li>
                      </Link>;
                    })}

                </ul>
                  : <ul>
                  {items.map(item => {
                      return <Link to={`/item/${item.itemNum}`} state={{ item: datas}}>
                        <li key={item.itemNum}>
                          <div className="itemlist_items_box">
                            <div className="itemlist_items_img">
                              <img src={process.env.REACT_APP_API_URL +item.itemThumb} />
                            </div>
                          </div>
                          <div className="itemlist_info">
                            <div className="itemlist_info_title">
                              <strong>{item.itemName}</strong>
                            </div>
                            <div className="itemlist_info_money">
                              <strong>{item.itemPrice}</strong>
                            </div>
                          </div>
                        </li>
                      </Link>;
                    })}

                </ul> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
