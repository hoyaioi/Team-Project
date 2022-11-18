import "../CSS/ServiceCenter.css";
import search from "../Img/search.png";
import { useState } from "react";
import Faq from "./Faq";
import FaqMenu from "./FaqMenu";

function ServiceCenter() {
  let [faqModal, setFaqModal] = useState(false);
  const [list, setList] = useState([
    { title: "회원가입/정보" },
    { title: "결제/배송" },
    { title: "환불/반품" },
    { title: "기타" },
  ]);

  return (
    <>
      <div className="service_board_sec">
        <div className="service_search_box">
          <form>
            <div className="service_search_data">
              <h2>자주묻는 질문 검색</h2>
              <div className="service_search_area">
                <input
                  type="text"
                  className="service_search_bar"
                  spellCheck="false"
                  maxLength="64"
                  placeholder="검색어를 입력해주세요."
                />
                <button type="submit" className="service_search_btn">
                  <img src={search} className="service_search_img" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="service_board_title">
          <h3>FAQ</h3>
        </div>
        <div className="service_board_list">
          <FaqMenu list={list} />
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>분류</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00</td>
                <td
                  onClick={() => {
                    setFaqModal(!faqModal);
                  }}
                >
                  기타
                </td>
                <td>내용내용내용내용</td>
              </tr>

              {faqModal === true ? <Faq /> : null}
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
              <tr>
                <td>00</td>
                <td>기타</td>
                <td>내용내용내용내용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ServiceCenter;
