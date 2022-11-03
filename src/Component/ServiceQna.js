import '../CSS/ServiceQna.css';
import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ServiceQna() {
    return (
        <>
            <div id="serviceqna_container">
                <div id="serviceqna_contents">
                    <div className="serviceqna_main_contents">
                        <div className="serviceqna_side_cont">
                            <div className="serviceqna_side_box">
                                <h2>고객센터</h2>
                                <ul className="serviceqna_side_menu">
                                    <Link to="/servicecenter"><li>FAQ</li></Link>
                                    <Link to="/notice"><li>공지사항</li></Link>
                                    <Link to="/serviceqna"><li>1:1문의</li></Link>
                                </ul>
                            </div>
                            <div className="serviceqna_side_info">
                                <ul>
                                    <li>고객상담센터</li>
                                    <li><strong className="serviceqna_num">1818-1818</strong></li>
                                    <li>test@test.com</li>
                                    <li>월 ~ 금 09 : 00 ~ 18 : 00</li>
                                    <li>점심시간 12: 00 ~ 13 : 00</li>
                                    <li>공휴일 / 토,일 휴무</li>
                                </ul>
                            </div>
                        </div>
                        <div className="serviceqna_main_cont">
                            <div className="serviceqna_board_sec">
                                <div className="serviceqna_board_title">
                                    <h3>1:1문의</h3>
                                </div>
                                <div className='serviceqna_board_write'>
                                    <form>
                                        <div className='serviceqna_board_box'>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>말머리</th>
                                                        <td>
                                                            <div className='serviceqna_select'>
                                                                <select>
                                                                    <option value='서비스장애'>서비스장애</option>
                                                                    <option value='기타'>기타문의사항</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>작성자</th>
                                                        <td>회원이름</td>
                                                    </tr>
                                                    <tr>
                                                        <th>제목</th>
                                                        <td><input type='text' /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>본문</th>
                                                        <td><CKEditor
                                                            editor={ClassicEditor}
                                                            data="<p>Hello from CKEditor 5!</p>"
                                                            onReady={editor => {
                                                                // You can store the "editor" and use when it is needed.
                                                                console.log('Editor is ready to use!', editor);
                                                            }}
                                                            onChange={(event, editor) => {
                                                                const data = editor.getData();
                                                                console.log({ event, editor, data });
                                                            }}
                                                            onBlur={(event, editor) => {
                                                                console.log('Blur.', editor);
                                                            }}
                                                            onFocus={(event, editor) => {
                                                                console.log('Focus.', editor);
                                                            }}
                                                        /></td>
                                                    </tr>
                                                    <tr>
                                                        <th>첨부파일</th>
                                                        <td><input type='file' /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                    <div className='serviceqna_btn_box'>
                                        <button>취소</button>
                                        <button>저장</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceQna;