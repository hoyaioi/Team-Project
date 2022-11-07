import "../CSS/Main.css";
import Banner from "./Banner";
import Items from "./Items";

function Main() {
  return (
    <>
      <Banner />
      <div id="main">
        <div className="main_wrap">
          <div className="main_items_wrap">
            <div className="main_items_title">판매량 BEST🏆</div>
            <Items />
            <div className="main_items_title">추천 상품😘</div>
            <Items />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
