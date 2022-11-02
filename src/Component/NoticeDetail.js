import '../CSS/NoticeDetail.css';
import { Link } from 'react-router-dom';


function NoticeDetail() {
    return (
        <>
            <div id="noticedetail_container">
                <div id="noticedetail_contents">
                    <div className="noticedetail_main_contents">
                        <div className="noticedetail_side_cont">
                            <div className="noticedetail_side_box">
                                <h2>고객센터</h2>
                                <ul className="noticedetail_side_menu">
                                    <Link to="/servicecenter"><li>FAQ</li></Link>
                                    <Link to="/notice"><li>공지사항</li></Link>
                                </ul>
                            </div>
                            <div className="noticedetail_side_info">
                                <ul>
                                    <li>고객상담센터</li>
                                    <li><strong className="noticedetail_num">1818-1818</strong></li>
                                    <li>test@test.com</li>
                                    <li>월 ~ 금 09 : 00 ~ 18 : 00</li>
                                    <li>점심시간 12: 00 ~ 13 : 00</li>
                                    <li>공휴일 / 토,일 휴무</li>
                                </ul>
                            </div>
                        </div>
                        <div className="noticedetail_main_cont">
                            <div className="noticedetail_board_sec">
                                <div className="noticedetail_board_title">
                                    <h3>공지사항</h3>
                                </div>
                                <div className='noticedetail_view_title'>
                                    <h3>공지제목제목제목</h3>
                                </div>
                                <div className='noticedetail_view_info'>
                                    <span className='noticedetail_writer'>관리자</span>
                                    <span className='noticedetail_date'>작성일자</span>
                                    <span className='noticedetail_hits'>조회수 <span>77</span></span>
                                </div>
                                <div className='noticedetail_view_content'>
                                    <textaarea>공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용</textaarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoticeDetail;