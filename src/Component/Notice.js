import '../CSS/Notice.css';
import { Link } from 'react-router-dom';

function Notice() {
    return (
        <>
            <div id="notice_container">
                <div id="notice_contents">
                    <div className="notice_main_contents">
                        <div className="notice_side_cont">
                            <div className="notice_side_box">
                                <h2>고객센터</h2>
                                <ul className="notice_side_menu">
                                    <Link to="/servicecenter"><li>FAQ</li></Link>
                                    <Link to="/notice"><li>공지사항</li></Link>
                                </ul>
                            </div>
                            <div className="notice_side_info">
                                <ul>
                                    <li>고객상담센터</li>
                                    <li><strong className="notice_num">1818-1818</strong></li>
                                    <li>test@test.com</li>
                                    <li>월 ~ 금 09 : 00 ~ 18 : 00</li>
                                    <li>점심시간 12: 00 ~ 13 : 00</li>
                                    <li>공휴일 / 토,일 휴무</li>
                                </ul>
                            </div>
                        </div>
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
                                               <td> <a><Link to="/noticedetail">제목제목제목</Link></a></td>
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
                    </div>
                </div>
            </div>
        </>

    );
}

export default Notice;