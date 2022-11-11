import "../CSS/Notice.css";
import { Link } from "react-router-dom";

function Notice() {
  return (
    <>
      <div className="notice_main_cont">
        <div className="notice_board_sec">
          <div className="notice_board_title">
            <h3>공지사항</h3>
          </div>
          <div className="notice_board_list">
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>날짜</th>
                  <th>작성자</th>
                  <th>조회</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>00</td>
                  <td>
                    {" "}
                    <Link to="/noticedetail">제목제목제목</Link>
                  </td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
                <tr>
                  <td>00</td>
                  <td>제목제목제목</td>
                  <td>2022-11-01</td>
                  <td>관리자</td>
                  <td>777</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;
