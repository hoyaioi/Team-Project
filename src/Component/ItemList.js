import { Link } from "react-router-dom";
import "../CSS/ItemList.css";
import DummyItem from "../DummyItem.json";

function ItemList() {
  return (
    <>
      <div className="itemlist_container">
        <div className="itemlist_contents">
          <div className="itemlist_main">
            <div className="itelist_title">
              <h2>전체보기</h2>
            </div>
            <div className="itemlist_box">
              <div className="itemlist_inbox">
                <span className="itemlist_num">
                  <strong>5개의 상품</strong>
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
                <ul>
                  {DummyItem.rcmitem.map((item, id) => (
                    <Link to="/item">
                      <li>
                        <div className="itemlist_items_box">
                          <div className="itemlist_items_img">
                            <img src={item.img} />
                          </div>
                        </div>
                        <div className="itemlist_info">
                          <div className="itemlist_info_title">
                            <strong>{item.title}</strong>
                          </div>
                          <div className="itemlist_info_money">
                            <strong>{item.price}</strong>
                          </div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
